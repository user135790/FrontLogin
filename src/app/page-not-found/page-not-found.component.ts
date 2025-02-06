import { Component } from '@angular/core';
import { CustomPrimengModule } from '../custom-primeng/custom-primeng.module';
import { RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';
import { BackgroundLoggedComponent } from '../background-logged/background-logged.component';

@Component({
  selector: 'app-page-not-found',
  imports: [CustomPrimengModule, RouterLink, BackgroundLoggedComponent],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css'
})
export class PageNotFoundComponent {


  logged = false;

  constructor(authService:AuthService){
    if(authService.getAuth()!=null){
      this.logged = true
    }else{
      this.logged = false
    }

  }



}
