import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../user/user-service.service';
import { UserInterface } from '../user/user-interface';


@Component({
  selector: 'app-form-user',
  imports: [ReactiveFormsModule],
  templateUrl: './form-user.component.html',
  styleUrl: './form-user.component.css'
})
export class FormUserComponent {

  constructor (private service:UserService){}

  @Input() usuario:UserInterface | undefined = undefined;

  user = new FormGroup({  
    nombre: new FormControl(this.usuario?.nombre ?? '',[Validators.required]),
    correoElectronico: new FormControl(this.usuario?.correoElectronico ?? '',[Validators.email, Validators.required]),
    perfil: new FormControl(this.usuario?.perfil ?? '',[Validators.required]),
    contrasena: new FormControl(this.usuario?.contrasena ?? '',[Validators.required, Validators.minLength(7)])
  });

  onSubmitUser() {
    this.service.createUser(this.user.value as UserInterface).subscribe()
  }
}
