export interface RegisterParams {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}
export interface LoginParams {
  email: string;
  password: string;
  rememberMe: boolean;
}
export interface TokenResponse {
  auth: boolean;
  token: string;
}
export interface UserData{
  Username: string;
  Phone: string;
  FName: string;
  LName: string;
  Email: string;
}
export interface Posts{
  Username: string;
  body: string;
  timestamp: string;
}