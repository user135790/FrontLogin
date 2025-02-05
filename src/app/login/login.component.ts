import { Component, EventEmitter, Output } from '@angular/core';
import {ReactiveFormsModule, Validators} from '@angular/forms';
import {FormControl, FormGroup} from '@angular/forms';
import { UserService } from '../user/user-service.service';
import { CustomPrimengModule } from '../custom-primeng/custom-primeng.module';
import { distinctUntilChanged } from 'rxjs';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CustomPrimengModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent{

  login: FormGroup;
  @Output() sessionUpdateEvent = new EventEmitter()

  constructor (private service:UserService, private route:Router){
    this.login = new FormGroup({  
      nombre: new FormControl('',[Validators.required]),
      contrasena: new FormControl('',[Validators.required, Validators.minLength(7)])
    });
  }

  get nombre():FormControl{
    return this.login.get("nombre") as FormControl;
  }

  get contrasena():FormControl{
    return this.login.get("contrasena") as FormControl;
  }

  propiedadesCss = {colorIcono:"#da0e0e", disabled:true}

  onSubmitLogin() {
    let perfil = "";
    this.service.sendLogin(this.login.value).subscribe(
      (data)=>{
        let contraseña = data.contrasena
        let usuario = data.usuario
        sessionStorage.setItem("token",btoa(usuario+':'+contraseña));
        this.sessionUpdateEvent.emit()
      }
    );
    
  }

  ngOnInit(){
    this.login.statusChanges.pipe(
      distinctUntilChanged()).subscribe(estado => {
        if (estado == "VALID"){
          this.propiedadesCss.colorIcono = "#15c475"
          this.propiedadesCss.disabled = false
        }
      })
  }

  
  
}
