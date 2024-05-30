import { create } from "zustand";
import { getCurrent, setToken, logout } from "../apiServise/userAPI";
import { persist, devtools } from "zustand/middleware";
import { getReviewsByRecipe } from "../apiServise/reviewsAPI";
import { TReview } from "../types/types";

type User = { name: string | null; email: string | null };

interface AuthCredentials {
  user: User;
  token: string | null;
}

interface userState {
  user: User;
  token: string | null;
  updateAuth: (authCredentials: AuthCredentials) => void;
  logoutUser: () => void;
  getCurrentUser: () => void;
}

interface reviewState {
  reviews: [TReview] | null;
  getReviews: (arg: string) => void;
  loading: boolean;
  error: null | string;
}

export const useStore = create<userState>()(
  devtools(
    persist(
      (set, get) => ({
        user: { name: null, email: null },
        token: null,
        updateAuth: (authCredentials) => {
          set({ user: authCredentials.user, token: authCredentials.token });
        },
        logoutUser: async () => {
          await logout();
          set({ user: { name: null, email: null } });
        },
        getCurrentUser: async () => {
          const token = get().token;

          if (token) {
            setToken(token);
            try {
              const user = await getCurrent();
              set({ user });
            } catch (error) {
              console.log((error as Error).message);
            }
          }
        },
      }),
      { name: "token", partialize: (state) => ({ token: state.token }) }
    )
  )
);

export const useReviews = create<reviewState>((set) => ({
  reviews: null,
  loading: false,
  error: null,
  getReviews: async (id: string) => {
    set({ loading: true });

    try {
      const reviews = await getReviewsByRecipe(id);

      set({ reviews });
    } catch (error) {
      set({ error: (error as Error).message });
    } finally {
      set({ loading: false });
    }
  },
}));
