import { createContext } from "react";
import { User } from "../types";
export const UserContext = createContext<User>({
  name: "",
  email: "",
  isLoggedIn: false,
  isAdminUser: false,
  isSuperUser: false,
  friends: [],
});
