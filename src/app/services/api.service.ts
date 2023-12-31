import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from 'src/config/main.config';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url;

  constructor(public http: HttpClient) {
    const u = localStorage.getItem('baseurl');

    this.url = /*u ? u : */Config.api;
    console.log('psafsau', this.url);
  }

  get(endpoint: string, params?: any, reqOpts?: any) {
    return this.http.get(this.url + '/' + endpoint, reqOpts);
  }

  post(endpoint: string, body: any, reqOpts?: any) {
    return this.http.post(this.url + '/' + endpoint, body, reqOpts);
  }

  put(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(this.url + '/' + endpoint, body, reqOpts);
  }

  delete(endpoint: string, reqOpts?: any) {
    return this.http.delete(this.url + '/' + endpoint, reqOpts);
  }

  patch(endpoint: string, body: any, reqOpts?: any) {
    return this.http.patch(this.url + '/' + endpoint, body, reqOpts);
  }
}
