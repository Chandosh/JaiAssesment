import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url: string;
  constructor(public http: HttpClient) {
    this.url = 'https://api.openweathermap.org/';
  }

  post(route: string, headers: HttpHeaders, body: any) {
    return this.http.post((this.url + route).toString(), body, { headers });
  }

  get(route: string,  headers: HttpHeaders) {
    return this.http.get((this.url + route).toString(), { headers });
  }

  put(route: string, headers: HttpHeaders, body: any) {
    return this.http.put((this.url + route).toString(), body, { headers });
  }

  delete(route: string,  headers: HttpHeaders) {
    return this.http.delete((this.url + route).toString(), { headers });
  }
}