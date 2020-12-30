import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url: string = "https://my-json-server.typicode.com/celebitolga/JsonPlaceHolder/users";

  constructor(
    private http: HttpClient
  ) {  }

  getUsers(): Observable<any>  {
    return this.http.get(this.url);
  }

}
