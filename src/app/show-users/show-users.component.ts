import { Component, Inject } from '@angular/core';
import { CustomPrimengModule } from '../custom-primeng/custom-primeng.module';
import { UserService } from '../user/user-service.service';
import { UserInterface } from '../user/user-interface';
import { BackgroundLoggedComponent } from '../background-logged/background-logged.component';
import { RouterLink, RouterOutlet, RouterLinkActive, Router, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-show-users',
  imports: [CustomPrimengModule,BackgroundLoggedComponent, RouterLink, RouterOutlet],
  templateUrl: './show-users.component.html',
  styleUrl: './show-users.component.css'
})
export class ShowUsersComponent {

  users:UserInterface[]|any;
  display="show"
  private routeSubscription=Inject(Subscription)


  constructor(private service:UserService, private route:Router, private auth:AuthService){
    service.getUsers()
  }

  cerrarSesion(){
    this.auth.logout()
    this.route.navigate(["/login"])
  }

  ngOnInit(){
    this.service.users$.subscribe((data:UserInterface[])=>{
      this.users = data
    })

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
