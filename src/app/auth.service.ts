import { inject, Injectable } from '@angular/core';
import { UserService } from './user/user-service.service';
import { firstValueFrom, map, Observable, of, Subscription, switchMap } from 'rxjs';
import { CompleteUserInterface } from './user/user-interface';
import { GuardResult, MaybeAsync, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user;
  private perfiles;
  constructor(private userService:UserService, private jwtService:JwtHelperService, private route:Router) {
    this.user = jwtService.decodeToken();
    this.perfiles = ["ADMINISTRADOR","INVITADO"]
  }


  login(authToken:string){
    sessionStorage.setItem("token", authToken)
  }

  logout(){
    sessionStorage.removeItem("token")
  }

  getAuth():string|null{
    return sessionStorage.getItem("token")
  }

  getUser():string|null{
    return this.jwtService.decodeToken().sub;
  }

  getRol(){
    return this.jwtService.decodeToken().role;
  }

  isLogged(perfil:string):MaybeAsync<GuardResult>{
    let logged:MaybeAsync<GuardResult>; 
    let usuario = this.getUser();
    let rol = this.getRol();
    if(usuario){
      if(perfil == rol){
          return true
        }else{
          if(this.perfiles.includes(perfil)){
            logged = this.route.navigate(["/error"])
            return logged
          }else{
            logged = this.route.navigate(["/login"])
            return logged
          }
        }
    }else{
      logged = this.route.navigate(["/registro"])
      return logged;
      
    }
  }
  
}
