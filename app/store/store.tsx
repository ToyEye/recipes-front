import { create } from "zustand";

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
}

export const useStore = create<State>((set) => ({
  user: { name: null, email: null },
  token: null,
  updateAuth: (authCredentials) =>
    set({ user: authCredentials.user, token: authCredentials.token }),
  logoutUser: () => set({ user: { name: null, email: null } }),
}));
