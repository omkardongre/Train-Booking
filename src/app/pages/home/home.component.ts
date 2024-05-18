import { Component, OnInit } from '@angular/core';
import { StationsService } from '../../services/stations.service';
import { IStation, ITravel, ResponseModel } from '../../models/Stations';
import {HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers : [StationsService]
})
export class HomeComponent implements OnInit {
  
  
  travelObj : ITravel =  {
    fromStationID : "",
    toStationID : "",
    dateOfTravel : ""
  }

  stationList : IStation[] = []
  constructor(private stationSrv:StationsService, private router : Router) {

    
  }

  ngOnInit() {
    this.loadStations();
  }

  loadStations(){
    this.stationSrv.getAllStation().subscribe((res:ResponseModel) => {
      this.stationList = res.data
      console.log("stationList : " , this.stationList);
    }, error => {
      alert("Error Ocurred" + JSON.stringify(error));
    })
  }

  onSearch() {
    console.log(this.travelObj);
    this.router.navigate(['search', this.travelObj.fromStationID, this.travelObj.toStationID, this.travelObj.dateOfTravel]);
  }

}
