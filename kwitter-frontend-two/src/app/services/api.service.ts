import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
//import { CookieService } from 'ngx-cookie-service';
import { REQUEST_TYPE_GET, REQUEST_TYPE_POST, REQUEST_TYPE_PUT, REQUEST_TYPE_DELETE, REQUEST_TYPE_POST_BLOB, REQUEST_TYPE_GET_BLOB, REQUEST_TYPE_PATCH } from 'src/app/constants/url';
import { NotificationActions } from "src/app/actionCreators";


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    public _http: HttpClient,
    //private _cookieService: CookieService,
    ) {}

    public callApiService({ requestType, url, headers, body, shouldBlock }:
      { requestType: string, url: string, headers?: HttpHeaders, body?: string, shouldBlock?: boolean }): Observable<any> {
     
        if (!headers) {
          headers = new HttpHeaders({
             "X-Requested-With": "XMLHttpRequest",
             "content-type": "application/json",
             //"Authorization":'Bearer ' + localStorage.getItem('token'),
          });
          if (localStorage.getItem('token')) {
            headers = headers.set("Authorization",'Bearer '.concat(JSON.parse(localStorage.getItem('token'))))
          }
      }
      let response: Observable<any>;
      switch (requestType) {
          case REQUEST_TYPE_GET:
              return this._http.get(url, { headers: headers});
            
          case REQUEST_TYPE_POST:
              return  this._http.post(url, body, { headers: headers});

          case REQUEST_TYPE_PUT:
              return this._http.put(url, body, { headers: headers});

          case REQUEST_TYPE_DELETE:
               return this._http.delete(url, { headers: headers});

          case REQUEST_TYPE_POST_BLOB:
              return this._http.post(url, body, { headers: headers, responseType: 'blob', reportProgress: true });
          
          case REQUEST_TYPE_GET_BLOB:
              return this._http.get(url, { headers: headers, responseType: 'blob', reportProgress: true });
         
          case REQUEST_TYPE_PATCH:
              return this._http.patch(url, body, { headers: headers});
           
          default:
              throw new Error(`invalid value provided for RequestType => [${requestType}]`);
      }
  }

}
