import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { LoginComponent } from "./login/login.component"
import { FormUserComponent } from './form-user/form-user.component';
import { CustomPrimengModule } from './custom-primeng/custom-primeng.module';
import { ShowUsersComponent } from './show-users/show-users.component';

@Component({
  selector: 'app-root',
  imports: [CustomPrimengModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FrontLogin';
  session = sessionStorage.getItem("token")

  getSession(token:string){
    this.session = sessionStorage.getItem("token")
  }
}
