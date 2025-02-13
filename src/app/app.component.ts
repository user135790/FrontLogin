import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { LoginComponent } from "./login/login.component"
import { FormUserComponent } from './form-user/form-user.component';
import { CustomPrimengModule } from './custom-primeng/custom-primeng.module';
import { ShowUsersComponent } from './show-users/show-users.component';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  imports: [CustomPrimengModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FrontLogin';
  session:string|null = "";

  constructor(private auth:AuthService, private route:Router){

  }
}
