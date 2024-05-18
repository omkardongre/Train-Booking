export interface IUserLogin {
    status : boolean,
    name : string
}

export interface ResponseModel {
    message : string
    result : boolean
    data : IPassenger
}

export interface IPassenger {
    passengerID: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
}


export interface ResponseModelForTrainsBetweenStations {
    message : string
    result : boolean
    data : ITrainsBetweenStations []
}

export interface ITrainsBetweenStations {
    trainId: number;
    trainNo: number;
    trainName: string;
    departureStationName: string;
    arrivalStationName: string;
    arrivalTime: string;
    departureTime: string;
    totalSeats: number;
    departureDate: string;
    bookedSeats: number;
}

export interface ILoginCredentials {
    phone: string;
    password: string;
}

export interface IAddPassenger {
    name : string, 
    age : string
}

export interface IBookTicket {
    trainId : number,
    passenger : IAddPassenger[]
}

export interface ITrainBooking {
    bookingId: number;
    trainId: number;
    passengerId: number;
    travelDate: string; // Assuming ISO 8601 format
    bookingDate: string; // Assuming ISO 8601 format
    totalSeats: number;
    TrainAppBookingPassengers: ITrainAppBookingPassenger[];
  }
  
  interface ITrainAppBookingPassenger {
    bookingPassengerId: number;
    bookingId: number;
    passengerName: string;
    seatNo: number;
    age: string;
  }
  