import { Component } from '@angular/core';
import { TrainsService } from '../../services/trains.service';
import { ILoginCredentials, IPassenger } from '../../models/User';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../services/auth-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [HttpClientModule, FormsModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css',
  providers : [TrainsService]
})
export class UserLoginComponent {

  loginCredentials : ILoginCredentials = {
    phone : "",
    password : ""
  }

  constructor(private trainsService:TrainsService, private router : Router, private authService: AuthServiceService) {}
  


  onLogin() {

    console.log("Login Credentials : ", this.loginCredentials);
    this.trainsService.login(this.loginCredentials).subscribe(res => {

      if (res.result == false) {
        alert("Invalid Credentials");
        this.loginCredentials={
          phone : "",
          password : ""
        }
        return;
      }


      alert("Sucesssfully Login");
      const data : IPassenger = res.data;
      console.log("Response : ", res);
      console.log(data);
      localStorage.setItem("trainUser", JSON.stringify(data));
      this.authService.setLoggedIn({status : true, name : data.firstName || ""});
      this.router.navigate(['/home'])
    }, error => {
      alert("Error Ocurred" + JSON.stringify(error));
    })
  }

}
