export interface Explore {
  topictag: string;
  description: string;
  navigationPath: string;
  label: string;
  isEnabled: boolean;
}

export interface User {
  name: string;
  email: string;
  isLoggedIn: boolean;
  isAdminUser: boolean;
  isSuperUser: boolean;
  friends: User[];
}
