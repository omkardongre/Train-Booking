import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AuthServiceService } from './services/auth-service.service';
import { IPassenger, IUserLogin } from './models/User';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers : [AuthServiceService]
})
export class AppComponent {
  title = 'ticket_booking';
  userLogin: IUserLogin = {status : false, name : ""};

  constructor(private authService: AuthServiceService) {
    // console.log("inside constructor of appcomponent")

  }

  ngOnInit() {
    console.log("inside ngOninit")
    console.log(this.userLogin + " userLogin in ngOnit")

    this.authService.isLoggedIn$.subscribe(isLoggedIn => {
      // console.log("inside subscribe with data : ", isLoggedIn)

      if(isLoggedIn.status)
        this.userLogin = isLoggedIn;

      const localData = localStorage.getItem('trainUser')
      if(localData) {
        const data:IPassenger = JSON.parse(localData);
        this.userLogin = {status : true, name : data.firstName || ""};
      }

    });
  }

  onLogout () {
    console.log("inside logout")  
    this.authService.setLoggedIn({status : false, name : ""});
    localStorage.removeItem("trainUser");
    this.userLogin = {status : false, name : ""};
  }
  

}
