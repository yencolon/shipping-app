import { IAuthData } from "./IAuthData";


export interface ISessionState {
  authData?: IAuthData;
  loading: boolean;
  error?: boolean;
}