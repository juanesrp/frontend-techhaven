import IProducts from "./IProduct";

export interface LoginProps {
  email: string;
  password: string;
}
export interface LoginErrorProps {
  email?: string;
  password?: string;
}

export interface RegisterProps {
  name: string;
  lastName: string;
  email: string;
  country: string;
  city: string;
  address: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

export interface RegisterErrorProps {
  name?: string;
  lastName?: string;
  email?: string;
  country?: string;
  city?: string;
  address?: string;
  phone?: string;
  password?: string;
  confirmPassword?: string;
}

export interface RegisterBackProps {
  name: string;
  email: string;
  address: string;
  phone: string;
  password: string;
}

export interface userSession {
  token: string;
  user: {
    name: string;
    email: string;
    id: number;
    address: string;
    orders: [];
    phone: string;
    role: string;
  };
}

export interface IOrder {
  id: number;
  date: string;
  status: string;
  products: IProducts[];
}
