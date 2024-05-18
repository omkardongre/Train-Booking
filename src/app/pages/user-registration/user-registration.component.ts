import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TrainsService } from '../../services/trains.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../services/auth-service.service';
import { IPassenger, IUserLogin } from '../../models/User';


@Component({
  selector: 'app-user-registration',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.css',
  providers : [TrainsService]
})
export class UserRegistrationComponent {
  registerObj: IPassenger = {
      passengerID: 0,
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: ""
  };

  
  constructor(private trainsService : TrainsService, private router : Router, private authService: AuthServiceService) {
  }

  onRegister() {
    this.trainsService.createPassenger(this.registerObj).subscribe(res => {
      alert("Sucesssfully Registered");
      const data : IPassenger = res.data;
      // console.log("Response : ", res);
      // console.log(data);
      localStorage.setItem("trainUser", JSON.stringify(data));
      this.authService.setLoggedIn({status : true, name : data.firstName || ""});
      this.router.navigate(['/home'])
    }, error => {
      alert("Error Ocurred" + JSON.stringify(error));
    })
  }

  onLogOut() {
    this.authService.setLoggedIn({status : false, name : ""});
    localStorage.removeItem("trainUser");
  }
}