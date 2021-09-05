import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
//import {Observable} from 'rxjs/Observable';
//import {GLOBAL} from './global';
import {ApiService} from '../services/api.service';
import {USER_API_URLS, REQUEST_TYPE_POST, REQUEST_TYPE_GET, REQUEST_TYPE_PATCH } from "../constants/url";
import {environment} from "src/environments/environment";
//import {User} from "../models/user";


@Injectable()
export class UserService {
    public backendUrl = environment.backendUrl;
    public url: string;
    public logedIn = false;
//    public token;
//    public stats;

    constructor(
        public _http: HttpClient,
        public _api: ApiService,
        ) {}

  getIdentity() {
    let token = JSON.parse(localStorage.getItem('token'));
    if (token) {
        this.logedIn = true;
    } else {
        this.logedIn = false;
    }
    return this.logedIn;
  }

  public signin(data) {
    return this._api.callApiService({
      requestType: REQUEST_TYPE_POST,
      body: JSON.stringify(data),
      url: this.backendUrl + USER_API_URLS.loginUser
    });
  }

  public register(data) {
    return this._api.callApiService({
      requestType: REQUEST_TYPE_POST,
      body: JSON.stringify(data),
      url: this.backendUrl + USER_API_URLS.registerUser
    });
  }

  public getProfile() {
    return this._api.callApiService({
      requestType: REQUEST_TYPE_GET,
      url: this.backendUrl + USER_API_URLS.getProfile
    });
  }

  public updateProfile(data) {
    return this._api.callApiService({
      requestType: REQUEST_TYPE_PATCH,
      body: JSON.stringify({"description": data.description}),
      url: this.backendUrl + USER_API_URLS.updateProfile
    });
  }
  // signup(user, gettoken = null): Observable<any> {
  //   if (gettoken != null) {
  //       user.gettoken = gettoken;
  //   }

  //   let params = JSON.stringify(user);
  //   let headers = new HttpHeaders().set('Content-Type', 'application/json');

  //   return this._http.post(this.url + 'login', params, {headers: headers});
}






//localStorage.setItem('identity', JSON.stringify(this.identity));