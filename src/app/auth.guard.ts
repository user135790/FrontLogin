import { CanActivateFn, MaybeAsync, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { UserService } from './user/user-service.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {

  const auth:AuthService = inject(AuthService);
  const router:Router=inject(Router)
  const urlTypes={invitado:["Home"],admin:["Gestion Usuarios","Editar Usuario"]}
  var grants = route.routeConfig?.title as string;
  
  if(urlTypes.invitado.includes(route.routeConfig?.title as string)){
    return auth.isLogged("INVITADO")
  }
  if(urlTypes.admin.includes(route.routeConfig?.title as string)){
    return auth.isLogged("ADMINISTRADOR")
  }
  return true;
  
};
