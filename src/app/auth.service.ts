import { inject, Injectable } from '@angular/core';
import { UserService } from './user/user-service.service';
import { firstValueFrom, map, Observable, of, Subscription, switchMap } from 'rxjs';
import { CompleteUserInterface } from './user/user-interface';
import { GuardResult, MaybeAsync } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private perfiles;
  constructor(private userService:UserService) {
    this.perfiles = ["INVITADO","ADMIN"]  
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
    let auth = this.getAuth()
    if(auth != null){
      let usuario = atob(auth).split(':')[0]
      return usuario
    }else{
      return null
    }
    
  }

  isLogged(perfil:string):MaybeAsync<GuardResult>{
    let logged = new Observable<Boolean> 
    let usuario = this.getUser()
    logged = this.userService.findUser(usuario as string).pipe(
        map(usuario=>{
          if(usuario.perfil == perfil){
            return true
          }else{
            return false
          }
        })
    )
    return logged as MaybeAsync<GuardResult>
  }
  
}
