import { Component, EventEmitter, Input, Output } from '@angular/core';
import {ReactiveFormsModule, Validators} from '@angular/forms';
import {FormControl, FormGroup} from '@angular/forms';
import { UserService } from '../user/user-service.service';
import { AuthService } from '../auth.service';
import { CustomPrimengModule } from '../custom-primeng/custom-primeng.module';
import { distinctUntilChanged } from 'rxjs';
import { Router, RouterLink } from '@angular/router';
import { BackgroundSvgComponent } from '../background-svg/background-svg.component';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CustomPrimengModule,BackgroundSvgComponent,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent{

  login: FormGroup;
  @Output() sessionUpdateEvent = new EventEmitter()
  @Input() logged;

  constructor (private service:UserService, private route:Router, private auth:AuthService){
    this.logged = false;
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
    let perfil = ""
    this.service.sendLogin(this.login.value).subscribe(
      (data)=>{
        if(data){
          this.auth.login(data.token);
          console.log(this.auth.getRol());
          perfil = this.auth.getRol();
        }
        if(perfil == "INVITADO"){
          this.route.navigate(['home/',this.auth.getUser()])
        }
        if(perfil == "ADMINISTRADOR"){
          this.route.navigate(['admin/'])
        }
        
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
