import { environment } from './../../../environments/environment';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enc, lib, HmacSHA256, SHA256 } from 'crypto-js';
import { encode } from 'utf8';

import { Logger } from '../logger.service';

const log = new Logger('HmacInterceptorService');

const APP_ID = environment.appId;
const API_KEY = environment.apiKey;

@Injectable({
  providedIn: 'root',
})
export class HmacInterceptorService implements HttpInterceptor {
  constructor() {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const body = req.body == null ? null : JSON.stringify(req.body);
    req = req.clone({
      headers: req.headers.set('api_id', APP_ID).set('hmac_auth', this.createHmacSignature(req.method, req.url, body)),
    });

    return next.handle(req);
  }

  createHmacSignature(reqMethod: string, reqUrl: string, reqBody: string): string {
    const requestUrl = encodeURIComponent(reqUrl.trim()).toLowerCase();
    const timeStamp = +new Date();
    const nounce = enc.Base64.stringify(lib.WordArray.random(8));

    let signature = `${APP_ID}|${reqMethod}|${requestUrl}|${nounce}|${timeStamp}|`;

    if (reqBody != null) {
      const updatedContent = enc.Base64.stringify(SHA256(encode(reqBody)));
      signature = signature + updatedContent;
    }

    const apiKey = encode(API_KEY);
    const hmacSignature = enc.Base64.stringify(HmacSHA256(encode(signature), apiKey));

    log.info(`${APP_ID}:${hmacSignature}:${nounce}:${timeStamp}`);

    return `${APP_ID}:${hmacSignature}:${nounce}:${timeStamp}`;
  }
}
