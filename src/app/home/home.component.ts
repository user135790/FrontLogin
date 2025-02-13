import { Component, Inject, Input } from '@angular/core';
import { CustomPrimengModule } from '../custom-primeng/custom-primeng.module';
import { UserService } from '../user/user-service.service';
import { CompleteUserInterface } from '../user/user-interface';
import { RouterLink, RouterOutlet, RouterLinkActive, Router } from '@angular/router';
import { BackgroundLoggedComponent } from '../background-logged/background-logged.component';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-home',
  imports: [CustomPrimengModule,BackgroundLoggedComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  
  user:CompleteUserInterface|any
  editar=false
  

  constructor(private userService:UserService, private auth:AuthService, private route:Router){
  
  }

  @Input() username="";

  ngOnInit(){
    this.userService.findUser(this.username).subscribe((data: CompleteUserInterface)=>{
      this.user = data as CompleteUserInterface
    })
  }

  cerrarSesion(){
    this.auth.logout()
    this.route.navigate(["/login"])
  }

  HabilitarEdicion(){
    this.editar = true
  }

}
