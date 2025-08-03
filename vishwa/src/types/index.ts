export interface User {
  _id?: string;
  email: string;
  name: string;
  profilePhoto?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface SignupData {
  name: string;
  email: string;
  password: string;
  profilePhoto?: File | null;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  user?: User;
  token?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}
