import { Vehicle } from "./vehicle.interface";

export class Transformer {

    name: string;
    vehicleGroup: string;
    vehicleType: string;
    vehicleModel: string;
    gear?: string[];
    status: string;

    constructor(name: string, vehicle: Vehicle, status: string, gear?: string[]) {
        
        this.name = name;
        this.vehicleGroup = vehicle.vehicleGroup;
        this.vehicleType = vehicle.vehicleType;
        this.vehicleModel = vehicle.vehicleModel;
        this.status = status;
        this.gear = gear;

    }
}