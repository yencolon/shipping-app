import React, { createContext } from 'react';
import AuthI from './authContextType';

const initialAuthContext: AuthI = {
  isAuth: false
}
const AuthContext = createContext(initialAuthContext)
export const useAuthContext = AuthContext;
export default AuthContext;