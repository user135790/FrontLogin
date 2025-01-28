import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../user/user-service.service';
import { UserInterface, CompleteUserInterface } from '../user/user-interface';
import { User } from '../user/user';


@Component({
  selector: 'app-form-user',
  imports: [ReactiveFormsModule],
  templateUrl: './form-user.component.html',
  styleUrl: './form-user.component.css'
})
export class FormUserComponent {

  constructor (private service:UserService){}

  @Input() nombreUsuario:string = "";

  idUsuario: number = -1;

  usuario: CompleteUserInterface | undefined = undefined

  user = new FormGroup({  
    nombre: new FormControl('',[Validators.required]),
    correoElectronico: new FormControl('',[Validators.email, Validators.required]),
    perfil: new FormControl('',[Validators.required]),
    contrasena: new FormControl('',[Validators.required, Validators.minLength(7)])
  });

  ngOnInit(){
    if (this.nombreUsuario != ""){
      this.service.findUser(this.nombreUsuario).subscribe((data)=>{
        this.idUsuario = data.id
        delete data.id
        this.user.setValue(data as UserInterface)
      })
    }
  }

  onSubmitUser() {
    if(this.nombreUsuario != ""){
      let nuevoUsuario: Partial<CompleteUserInterface> = this.user.value as CompleteUserInterface
      nuevoUsuario.id = this.idUsuario
      this.service.updateUser(nuevoUsuario as CompleteUserInterface).subscribe()
    }else{
      this.service.createUser(this.user.value as UserInterface).subscribe()
    }
    
  }
}
