export type AuthCredentials = {
  email: string;
  password: string;
};

export enum UserSex {
  MALE = "MALE",
  FEMALE = "FEMALE",
}

export enum UserRole {
  ADMIN = "ADMIN",
  USER = "USER",
}

export type User = {
  email: string;
  name: string;
  surname: string;
  phoneNumber: string;
  sex: UserSex;
  birthDate: string;
  experience: string;
  weight: number | null;
  imageUrl: string | null;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
};

export type AuthResponse = {
  user: User;
  accessToken: string;
};

export type RefreshTokensResponse = {
  accessToken: string;
};

export type GetSessionInfoResponse = User;

export type RegisterPayload = {
  email: string;
  password: string;
  name: string;
  surname: string;
  sex: string;
  birthDate: string;
  experience: string;
};

export type AuthState = {
  user: User | null;
  accessToken: string | null;
  isAuth: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  registerUser: (data: RegisterPayload) => Promise<void>;
  logout: () => Promise<void>;
  refreshToken: () => Promise<string>;
  getSessionInfo: () => Promise<User>;
  setAccessToken: (token: string | null) => void;
  setUser: (user: User | null) => void;
};
