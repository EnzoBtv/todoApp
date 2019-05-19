import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  baseUrl: String = 'http://localhost:3000/api'

  constructor(private http: HttpClient) { }

  private convertParams(paramsArr) {
    let str = ''
    paramsArr.forEach(param => {
      str += `/${param}` 
    });
    return str;
  }

  public async get (url, params){
    if(params && params.length > 0) {
      url += this.convertParams(params);
    }
    return await this.http.get(this.baseUrl + url);
  }

  public async post (url, body) {
    return await this.http.post(this.baseUrl + url, body);
  }

  public async put (url, body) {
    return await this.http.put(this.baseUrl + url, body);
  }

  public async delete (url, params) {
    if(params && params.length > 0) {
      url += this.convertParams(params);
    }
    return await this.http.delete(this.baseUrl + url);
  }
}
