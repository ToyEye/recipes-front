import { create } from "zustand";
import { getCurrent, setToken, logout } from "../apiServise/userAPI";
import { persist, devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import {
  getReviewsByRecipe,
  addReviewForRecipe,
} from "../apiServise/reviewsAPI";

import { TReview, IRecipe, IStatus } from "../types/types";
import { changeVoteByRecipe, getRecipeById } from "../apiServise/recipesAPI";

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

interface reviewState extends IStatus {
  reviews: TReview[] | null;
  getReviews: (arg: string) => void;
  addReview: (args: TReview) => void;
}

interface RecipeState extends IStatus {
  recipe: IRecipe | null;
  getRecipe: (id: string) => Promise<void>;
  changeVote: (id: string, vote: number) => Promise<void>;
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

export const useRecipe = create<RecipeState>()(
  devtools(
    immer((set) => ({
      recipe: null,
      loading: false,
      error: null,
      getRecipe: async (id: string) => {
        set({ loading: true });

        try {
          const recipe = await getRecipeById(id);

          set({ recipe });
        } catch (error) {
          set({ error: (error as Error).message });
        } finally {
          set({ loading: false });
        }
      },
      changeVote: async (id: string, vote: number) => {
        set({ loading: true });
        console.log(vote, id);
        try {
          const voteChanges = await changeVoteByRecipe(id, vote);

          set((state) => {
            if (state.recipe) {
              state.recipe = { ...state.recipe, ...voteChanges };
            }
          });
        } catch (error) {
          set({ error: (error as Error).message });
        } finally {
          set({ loading: false });
        }
      },
    }))
  )
);

export const useReviews = create<reviewState>()(
  devtools(
    immer((set) => ({
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
      addReview: async (credential) => {
        set({ loading: true });

        try {
          const reviews = await addReviewForRecipe(credential);

          set((state) => {
            state.reviews?.push(reviews);
          });
        } catch (error) {
          set({ error: (error as Error).message });
        } finally {
          set({ loading: false });
        }
      },
    }))
  )
);
