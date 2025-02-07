import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormUserComponent } from './form-user/form-user.component';
import { ShowUsersComponent } from './show-users/show-users.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from './auth.guard';


export const routes: Routes = [
    
    
    {path:"", component:LoginComponent, title:"Login"},
    {path:"login", component:LoginComponent, title:"Login"},
    {path:"registro", component:FormUserComponent, title:"Registrarse"},
    {path:"home/:username", component:HomeComponent , canActivate:[authGuard], title:"Home"},
    {path:"admin", component:ShowUsersComponent, title:"Gestion Usuarios", canActivate:[authGuard],
        children:[
            {path:"editar", component:FormUserComponent, canActivate:[authGuard], title:"Editar Usuario"}
        ]},
    {path:"**", component:PageNotFoundComponent, title:"Error 404"}

    

];
