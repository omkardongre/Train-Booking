export interface IStation{
    stationID: Number
    stationName: String
    stationCode: String
}

export interface ResponseModel {
    message : string
    result : boolean
    data : IStation[]
}

export interface ITravel {
    fromStationID: string,
    toStationID: string,
    dateOfTravel: string
}
