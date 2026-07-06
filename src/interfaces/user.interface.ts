import { Role } from "../types/roles";

export interface IUser {
  name: string;
  email: string;
  password: string;
  role: Role;
}