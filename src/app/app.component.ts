import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component"
import { FormUserComponent } from './form-user/form-user.component';
import { CustomPrimengModule } from './custom-primeng/custom-primeng.module';
import { ShowUsersComponent } from './show-users/show-users.component';
import { BackgroundSvgComponent } from './background-svg/background-svg.component';

@Component({
  selector: 'app-root',
  imports: [CustomPrimengModule, BackgroundSvgComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FrontLogin';
}
