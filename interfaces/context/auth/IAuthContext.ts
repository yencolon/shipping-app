import { RegisterSchemaType } from "@/schemas/registerSchema";
import { ISessionState } from "./ISessionState";
import { LoginSchemaType } from "@/schemas/loginSchema";

export interface IAuthContext {
  session: ISessionState;
  login: (auth: LoginSchemaType) => void;
  logout: () => void;
}