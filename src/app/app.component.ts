import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component"
import { FormUserComponent } from './form-user/form-user.component';
import { CustomPrimengModule } from './custom-primeng/custom-primeng.module';

@Component({
  selector: 'app-root',
  imports: [/*RouterOutlet, */LoginComponent, CustomPrimengModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FrontLogin';
}
