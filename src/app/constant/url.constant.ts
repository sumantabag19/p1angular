/// <summary>
/// Here we define application specific Url's
/// </summary>

import { environment } from './../../environments/environment';
export class UrlConstant {
  public static evaAuthorizeUserUrl: string = environment.eva_api_url + '/authorize';
  public static evaAuthorizeConnectTokenUrl: string = environment.eva_api_url + '/connect/token';
}
