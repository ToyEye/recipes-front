import { create } from "zustand";
import { getCurrent, setToken, logout } from "../apiServise/userAPI";
import { persist, devtools } from "zustand/middleware";

type User = { name: string | null; email: string | null };

interface AuthCredentials {
  user: User;
  token: string | null;
}

interface State {
  user: User;
  token: string | null;
  updateAuth: (authCredentials: AuthCredentials) => void;
  logoutUser: () => void;
  getCurrentUser: () => void;
}

export const useStore = create<State>()(
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
