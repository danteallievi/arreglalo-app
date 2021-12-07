export interface IUser {
  email: string;
  password: string;
}

export interface LocalUser {
  id: string;
  name: string;
  surname: string;
  email: string;
}

export interface IUserLogged {
  id: string;
  email: string;
  name: string;
  surname: string;
  professional: boolean;
  iat: number;
  exp: number;
}
