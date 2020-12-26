import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  url: string = "http://localhost:3000/users";

  constructor(
    private http: HttpClient
  ) {  }

  getUsers(): Observable<any>  {
    return this.http.get(this.url);
  }

}
