export class Login {
  username: string;
  password: string;
  remember?: boolean;
  buId?: number;
}
export interface EVAAuthorizeUserRequest {
  username: string;
  password: string;
}
export interface EVAConnectTokenResponse {
  scope: string;
  access_token: string;
  token_type: string;
  refresh_token: string;
  expires_in: number;
}
