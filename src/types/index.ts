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
}
export interface tokenResponse {
  auth: boolean;
  token: string;
}
