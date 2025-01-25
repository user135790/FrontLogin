import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInterface } from './user-interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  private urlApi = "/usuarios/"

  sendLogin(data:any): Observable<any>{
    return this.http.post(this.urlApi+"login",data, {withCredentials:true})
  }

  createUser(user: UserInterface): Observable<any>{
    return this.http.post(this.urlApi+"create", user, {withCredentials:true})
  }

  findUser(username:string): Observable<any>{
    return this.http.get(this.urlApi+"find/"+username, {withCredentials:true})
  }

  getUsers(): Observable<any>{
    return this.http.get(this.urlApi, {withCredentials:true})
  }
}
