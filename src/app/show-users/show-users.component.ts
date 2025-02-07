import { Component, Inject } from '@angular/core';
import { CustomPrimengModule } from '../custom-primeng/custom-primeng.module';
import { UserService } from '../user/user-service.service';
import { UserInterface } from '../user/user-interface';
import { BackgroundLoggedComponent } from '../background-logged/background-logged.component';
import { RouterLink, RouterOutlet, RouterLinkActive, Router, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-show-users',
  imports: [CustomPrimengModule,BackgroundLoggedComponent, RouterLink, RouterOutlet],
  templateUrl: './show-users.component.html',
  styleUrl: './show-users.component.css'
})
export class ShowUsersComponent {

  users:any;
  display="show"
  private routeSubscription=Inject(Subscription)


  constructor(private service:UserService, private route:Router){
    
    service.getUsers().subscribe((data)=>{
      this.users = data as UserInterface;
    })
  }

  ngOnInit(){
    this.routeSubscription = this.route.events.subscribe((event)=>{
      if (event instanceof NavigationStart){
        if(event.url!="/admin"){
          this.display = "edit"
        }else{
          this.display = "show"
        }
      }
    })
  }

}
