import React, {
  useContext,
  createContext,
  type PropsWithChildren,
  useState,
  useEffect,
} from 'react';
import * as SecureStore from 'expo-secure-store';
import { IAuthContext, IAuthData, ISessionState } from '@/interfaces/context/auth';
import { IUser } from '@/interfaces/rest';
import { timeout } from '@/utils';
import { LoginSchemaType } from '@/schemas/loginSchema';

const initialSession: ISessionState = {
  authData: undefined,
  loading: false,
  error: undefined,
};

const AuthContext = createContext<IAuthContext>({
  session: initialSession,
  login: () => {},
  logout: () => {},
});

// This hook can be used to access the user info.
export function useSession() {
  const value = useContext(AuthContext);
  return value;
}

export function SessionProvider({ children }: PropsWithChildren) {
  const [session, setSession] = useState<ISessionState>(initialSession);

  useEffect(() => {
    if (!session.authData) {
      checkAuthData();
    }
  }, []);

  // Check if the user is already logged in
  const checkAuthData = async () => {
    console.log('checkSession');
    setSession({ ...session, loading: true });
    await SecureStore.getItemAsync('session').then((value) => {
      if (value) {
        const authData: IAuthData = JSON.parse(value);
        if (authData?.user && authData?.token) {
          setSession({ ...session, authData: authData });
        }
      }
    });
  };

  // Login function
  const login = async (auth: LoginSchemaType) => {
    try {
      setSession({ ...session, loading: true });
      await timeout(1500);
      const user: IUser = { name: 'John Doe', email: auth.email, phone: '1234567890' };
      const token: string = 'super-secret-token';
      const authData: IAuthData = { user, token };
      await SecureStore.setItemAsync('session', JSON.stringify(authData));
      setSession({ ...session, authData: authData, loading: false });
    } catch (error) {
      if (error) {
        setSession({ ...session, loading: false, error: true });
      }
      throw new Error('Correo o contraseña no valido.');
    }
  };

  // Logout function
  const logout = async () => {
    try {
      setSession({ ...session, loading: true });
      await timeout(1000);
      await SecureStore.deleteItemAsync('session');
      setSession({ loading: false });
    } catch (error) {
      await SecureStore.deleteItemAsync('session');
      if (error) {
        setSession({ loading: false, error: true });
      }
    }
  };

  return <AuthContext.Provider value={{ session, login, logout }}>{children}</AuthContext.Provider>;
}
