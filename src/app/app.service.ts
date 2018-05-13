import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Subject } from 'rxjs';

import { Transformer } from './models/transformer.class';
import { DATA } from './data';

@Injectable()
export class AppService {
  selectedItem: Subject<number> = new Subject<number>();


  constructor() { }

  getTransformers(): any{
    return Observable.of(DATA);
  }

}
