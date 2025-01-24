import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = "http://localhost:8080/usuarios"
  constructor(private http:HttpClient) { }

  sendLogin(data:any): Observable<any>{
    return this.http.post("/api/usuarios/login",data, {withCredentials:true})
  }
}
