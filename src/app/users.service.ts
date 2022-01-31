import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { filter  } from 'rxjs/operators'; 
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
    /**Approach -1 ; API call:  method to get users  api data / demo purpose mock data stored in assets folder*/
  public getUserJSON(): Observable<any> {
    return this.http.get("./assets/users.json");
}
}
