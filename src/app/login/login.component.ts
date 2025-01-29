import { Component } from '@angular/core';
import {ReactiveFormsModule, Validators} from '@angular/forms';
import {FormControl, FormGroup} from '@angular/forms';
import { UserService } from '../user/user-service.service';
import { CustomPrimengModule } from '../custom-primeng/custom-primeng.module';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CustomPrimengModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor (private service:UserService){}

  login = new FormGroup({  
    nombre: new FormControl('',[Validators.required]),
    contrasena: new FormControl('',[Validators.required, Validators.minLength(7)])
  });


  onSubmitLogin() {
    this.service.sendLogin(this.login.value).subscribe()
  }
  
}
