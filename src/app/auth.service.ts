import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }


  login(authToken:string){
    sessionStorage.setItem("token", authToken)
  }

  logout(){
    sessionStorage.removeItem("token")
  }

  getAuth():string|null{
    return sessionStorage.getItem("token")
  }
  
}
