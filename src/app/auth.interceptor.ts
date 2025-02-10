import { HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  
  const auth = inject(AuthService).getAuth();
  if (auth != null){
    const newReq = req.clone({
      //headers: req.headers.set("Authorization", "Basic "+ auth)
    })
    return next(newReq)
  }
  return next(req);
};
