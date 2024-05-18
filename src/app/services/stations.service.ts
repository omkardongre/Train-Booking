import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { CONSTANT } from '../constant/constant';
import { Observable } from 'rxjs';
import {ITravel, ResponseModel } from '../models/Stations';
import { ResponseModelForTrainsBetweenStations } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class StationsService {

  apiEndPoint : string
  constructor(private http : HttpClient) {
    this.apiEndPoint = environment.ApiEndPoint
  }

  getAllStation() : Observable<ResponseModel> {
    return this.http.get<ResponseModel>(this.apiEndPoint + CONSTANT.ENDPOINTS.GET_ALL_STATION);
  }

  getTrainsBetweenStations(queryParams:string) : Observable<ResponseModelForTrainsBetweenStations> {
    return this.http.get<ResponseModelForTrainsBetweenStations>(this.apiEndPoint + CONSTANT.ENDPOINTS.GET_TRAINS_BETWEEN_STATIONS + queryParams);
  }

}
