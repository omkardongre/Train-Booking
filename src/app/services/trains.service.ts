import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { CONSTANT } from '../constant/constant';
import { Observable } from 'rxjs';
import {ILoginCredentials, ResponseModel, ResponseModelForTrainsBetweenStations } from '../models/User';
import { IPassenger, ITrainBooking } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class TrainsService {

  apiEndPoint : string
  constructor(private http : HttpClient) {
    this.apiEndPoint = environment.ApiEndPoint
  }
  
  createPassenger(obj : IPassenger) : Observable<ResponseModel> {
    return this.http.post<ResponseModel>(this.apiEndPoint + CONSTANT.ENDPOINTS.ADD_UPDATE_PASSENGER, obj);
  }

  login(obj : ILoginCredentials) : Observable<ResponseModel> {
    return this.http.post<ResponseModel>(this.apiEndPoint + CONSTANT.ENDPOINTS.LOGIN, obj);
  }

  booking(obj:ITrainBooking) : Observable<ResponseModel> {
    return this.http.post<ResponseModel>(this.apiEndPoint + CONSTANT.ENDPOINTS.BOOKING, obj);
  }
}
