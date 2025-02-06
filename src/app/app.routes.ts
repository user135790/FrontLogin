import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormUserComponent } from './form-user/form-user.component';
import { ShowUsersComponent } from './show-users/show-users.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';


export const routes: Routes = [
    
    
    {path:"", component:LoginComponent, title:"Login"},
    {path:"login", component:LoginComponent, title:"Login"},
    {path:"registro", component:FormUserComponent, title:"Registrarse"},
    {path:"home", component:HomeComponent, title:"Home", children:[
        {path:"editar", component:FormUserComponent, title:"Editar usuario"},
        {path:"admin", component:ShowUsersComponent, title:"Gestion Usuarios", children:[
            {path:"editar", component:FormUserComponent, title:"Editar Usuario"}
        ]}
    ]},
    {path:"**", component:PageNotFoundComponent, title:"Error 404"}

    

];
