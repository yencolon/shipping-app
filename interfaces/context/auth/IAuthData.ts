import { IUser } from "../../rest";

export interface IAuthData {
  user?: IUser;
  token?: string;
}