import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StationsService } from '../../services/stations.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IStation, ITravel, ResponseModel } from '../../models/Stations';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ITrainsBetweenStations } from '../../models/User';
import { BookTicketModalComponent } from '../../book-ticket-modal/book-ticket-modal.component';


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule, BookTicketModalComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
  providers : [StationsService]

})


export class SearchComponent {

  constructor(private stationSrv:StationsService, private route:ActivatedRoute) {
    this.selectedTrain = {
      trainId: 0,
      trainName:'',
      departureStationName:'',
      arrivalStationName:'',
      departureTime:'',
      arrivalTime:'',
      totalSeats: 0,
      departureDate:'',
      bookedSeats: 0,
      trainNo : 0
    }

  }
    
  searchObj : ITravel = {
    fromStationID:'',
    toStationID:'',
    dateOfTravel:''
  }
  
  trainList : ITrainsBetweenStations[] = [];
  stationList : IStation[] = [];
  selectedTrain: ITrainsBetweenStations;

  ngOnInit() {
    this.loadStations();
    this.loadRouteParams();
    this.getAllTrains()
  }

  loadStations() {
    this.stationSrv.getAllStation().subscribe((res:ResponseModel) => {
      this.stationList = res.data
      console.log("stationList : " , this.stationList);
    }, error => {
      alert("Error Ocurred" + JSON.stringify(error));
    })
  }

  loadRouteParams() {
    this.route.params.subscribe(params => {
      console.log("params : ", params); 
      this.searchObj.fromStationID = params['fromStationID'];
      this.searchObj.toStationID = params['toStationID']; // Capture toStationID from URL
      this.searchObj.dateOfTravel = params['dateOfTravel']; // Capture dateOfTravel from URL
    });
  }

  getAllTrains() {
    const queryParams = `?departureStationId=${this.searchObj.fromStationID}&arrivalStationId=${this.searchObj.toStationID}&departureDate=${this.searchObj.dateOfTravel}`;
    console.log("queryParams  : ", queryParams)
    this.stationSrv.getTrainsBetweenStations(queryParams).subscribe((res) => {
    this.trainList = res.data;
      console.log("response of new api : ", this.trainList)
    });
  }

  openModal(train: ITrainsBetweenStations) {
    this.selectedTrain = train;
  }

  

  bookTrain (trainId:any) {

  }

  closeModal() {
    this.selectedTrain = {
      trainId: 0,
      trainName: '',
      departureStationName: '',
      arrivalStationName: '',
      departureTime: '',
      arrivalTime: '',
      totalSeats: 0,
      departureDate: '',
      bookedSeats: 0,
      trainNo: 0
    }
  }
  
}


