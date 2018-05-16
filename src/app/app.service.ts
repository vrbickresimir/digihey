import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Subject, BehaviorSubject } from 'rxjs';

import { Transformer } from './models/transformer.class';
import { VehicleTypes } from './models/vehicleTypes.class';

@Injectable()
export class AppService {

  selectedItem: Subject<Transformer> = new BehaviorSubject<Transformer>(null);

  private TRANSFORMERS_URL = 'http://localhost:3000/transformers';
  private FACTIONS_URL = 'http://localhost:3000/factions';
  private OPTIONS_URL = 'http://localhost:3000/vehicleTypes';

  constructor(private httpClient: HttpClient) { }

  getTransformers(): any{
    return this.httpClient.get<Transformer[]>(this.TRANSFORMERS_URL);
    // return Observable.of(DATA);
  }

  getTransformer(index: number) {
    // return Observable.of(DATA[index]);
  }

  getFactions(){
    return this.httpClient.get(this.FACTIONS_URL);
  }

  getOptions() {
    return this.httpClient.get<VehicleTypes[]>(this.OPTIONS_URL);
  }

}
