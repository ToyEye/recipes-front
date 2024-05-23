import { create } from "zustand";

type User = { name: string; email: string };

interface AuthCredentials {
  user: User;
  token: string | null;
}

interface State {
  user: User;
  token: string | null;
  updateAuth: (authCredentials: AuthCredentials) => void;
}

export const useStore = create<State>((set) => ({
  user: { name: "", email: "" },
  token: null,
  updateAuth: (authCredentials) =>
    set({ user: authCredentials.user, token: authCredentials.token }),
}));
