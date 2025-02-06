import { Component } from '@angular/core';
import { CustomPrimengModule } from '../custom-primeng/custom-primeng.module';
import { UserService } from '../user/user-service.service';
import { UserInterface } from '../user/user-interface';
import { BackgroundLoggedComponent } from '../background-logged/background-logged.component';

@Component({
  selector: 'app-show-users',
  imports: [CustomPrimengModule,BackgroundLoggedComponent],
  templateUrl: './show-users.component.html',
  styleUrl: './show-users.component.css'
})
export class ShowUsersComponent {

  users:any;

  constructor(service:UserService){
    service.getUsers().subscribe((data)=>{
      this.users = data as UserInterface;
    })
  }

}
