import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IAddPassenger, ITrainBooking, ITrainsBetweenStations } from '../models/User';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TrainsService } from '../services/trains.service';

@Component({
  selector: 'app-book-ticket-modal',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './book-ticket-modal.component.html',
  styleUrl: './book-ticket-modal.component.css',
  providers : [TrainsService]
})
export class BookTicketModalComponent implements OnInit {

  constructor(private trainSrv : TrainsService) {
    this.passengers = [];
    this.passenger={name: '', age : ''};


}
  ngOnInit(): void {
    this.trainBookingObj = {
      bookingId: 1,
      trainId: this.train.trainId,
      passengerId: 1,
      travelDate: this.train.departureDate, // Assuming ISO 8601 format
      bookingDate: new Date().toISOString(),
      totalSeats: this.train.totalSeats,
      TrainAppBookingPassengers: []
    }
  }

  @Input() train!: ITrainsBetweenStations;
  @Output() closeModal = new EventEmitter<void>();

  passengers:IAddPassenger[]; 
  passenger:IAddPassenger;

  trainBookingObj! : ITrainBooking;

  addPassenger() {
    if (this.passenger.name === '' || this.passenger.age === '') {
      return;
    }

    
    this.passengers.push(this.passenger);
    this.trainBookingObj.TrainAppBookingPassengers.push({bookingPassengerId: 1, bookingId: 1, passengerName: this.passenger.name, seatNo: 1, age: this.passenger.age});

    console.log(this.passengers)
    this.passenger = {name: '', age : ''};
  }

  removePassenger(index: number) {
    this.passengers.splice(index, 1);
  }

  bookTickets() {
    console.log('Booking tickets for:', this.train, this.passengers);



    this.trainSrv.booking(this.trainBookingObj).subscribe(res => {
      alert("Booking done")
        console.log(res);
    }, err => {
      console.log(err);
    });
    
    this.closeModal.emit();
  }

}


// name : string, 
// age : string

// export interface ITrainBooking {
//   bookingId: number;
//   trainId: number;
//   passengerId: number;
//   travelDate: string; // Assuming ISO 8601 format
//   bookingDate: string; // Assuming ISO 8601 format
//   totalSeats: number;
//   TrainAppBookingPassengers: ITrainAppBookingPassenger[];
// }

// interface ITrainAppBookingPassenger {
//   bookingPassengerId: number;
//   bookingId: number;
//   passengerName: string;
//   seatNo: number;
//   age: number;
// }
