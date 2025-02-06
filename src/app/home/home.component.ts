import { Component, Input } from '@angular/core';
import { CustomPrimengModule } from '../custom-primeng/custom-primeng.module';
import { UserService } from '../user/user-service.service';
import { CompleteUserInterface } from '../user/user-interface';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { BackgroundLoggedComponent } from '../background-logged/background-logged.component';


@Component({
  selector: 'app-home',
  imports: [CustomPrimengModule, RouterLink, RouterOutlet, RouterLinkActive,BackgroundLoggedComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  @Input() username:string ="";
  user:CompleteUserInterface|any
  editar=false

  constructor(userService:UserService){
    
    userService.findUser(this.username).subscribe((data)=>{
      this.user = data as CompleteUserInterface
      
    })
  }

  HabilitarEdicion(){
    this.editar = true
  }

}
