import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUserLogin } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() {
      console.log("auth service constructor");
   }
  
  private isLoggedIn = new BehaviorSubject<IUserLogin>({status : false, name : ""});
  isLoggedIn$ = this.isLoggedIn.asObservable();

  setLoggedIn(userLogin: IUserLogin) {
    console.log("AuthServiceService : setLoggedIn ");
    this.isLoggedIn.next(userLogin);
  }
}
