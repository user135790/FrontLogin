import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormUserComponent } from './form-user/form-user.component';
import { ShowUsersComponent } from './show-users/show-users.component';


export const routes: Routes = [
    
    
    {path:"login", component:LoginComponent, title:"Login"},
    {path:"registro", component:FormUserComponent, title:"Registrarse"},
    {path:"homeAdmin", component:ShowUsersComponent, title:"Admin Usuarios", children:[
        {path:"editarUsuario", component:FormUserComponent, title:"Editar usuario"}
    ]},
    {path:"homeInvitado", component:ShowUsersComponent, title:"Usuarios", children:[
        {path:"editar", component:FormUserComponent, title:"Editar usuario"}
    ]}

    

];
