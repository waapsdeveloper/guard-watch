/* eslint-disable @typescript-eslint/naming-convention */
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from './basic/storage.service';
import { UtilityService } from './utility.service';
import { Observable, from } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Config } from 'src/config/main.config';


@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor  {

  api = Config.api;
  // apiKey = Config.API_KEY;
  // apiSecret = Config.API_SECRET;

  constructor(public utility: UtilityService) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return from(this.callToken()).pipe(
      switchMap(token => {
        const cloneRequest = this.addSecret(req, token );
        return next.handle(cloneRequest);
      })
    );

  }

  callToken(){
    return new Promise( resolve => {

      const token = localStorage.getItem('token');
      resolve(token);

    });
  }

  private addSecret(request: HttpRequest<any>, value: any){
    const v = value ? value : '';
    // const check = request.clone().url.indexOf('https://platform.devtest.ringcentral.com');
    // if (check != -1) {
    //   return request.clone();
    // }

    const clone = request.clone({
      setHeaders : {

        // eslint-disable-next-line @typescript-eslint/naming-convention
        Authorization: 'Bearer ' + v,
        Accept: 'application/json',
        'Content-Type': 'application/json',
        // 'app-type': 'zuul2'
      }
    });
    return clone;
  }
}
