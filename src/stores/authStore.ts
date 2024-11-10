import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { useNavigate } from 'react-router-dom';
import { IToken, IUser } from '../types/interfaces';

export interface IAuthStore {
  token: IToken | null;
  user: IUser | null;
  setToken: (authData: IToken) => void;
  setUser: (user: IUser) => void;
  logOut: () => void;
}

export const useAuthStore = create(
  persist<IAuthStore>(
    set => ({
      token: null,
      user: null,
      setToken: (authData: IToken) => set({ token: authData }),
      setUser: (user: IUser) => set({ user }),
      logOut: () => {
        set({ token: null, user: null });
        localStorage.removeItem('auth-storage');
      }
    }),
    {
      name: 'auth-storage'
    }
  )
);

export const useLogOut = () => {
  const navigate = useNavigate();
  const authStore = useAuthStore();
  const logOut = authStore.logOut;

  return () => {
    logOut();
    navigate('/login');
  };
};
