export interface registerParams {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}
export interface loginParams {
  email: string;
  password: string;
  rememberMe: boolean;
}
export interface tokenResponse {
  auth: boolean;
  token: string;
}
export interface userData{
  Username: string,
  Phone: string,
  FName: string,
  LName: string,
  Email: string
}
export interface posts{
  Username: string,
  body: string,
  timestamp: string
}