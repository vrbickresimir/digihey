import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Transformer } from '../models/transformer.class';
import { AppService } from '../app.service';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit, OnDestroy {

  transformers: Transformer[];
  subscription: Subscription = new Subscription();


  constructor(public appService: AppService) { }

  ngOnInit() {
    this.subscription.add(this.appService.getTransformers().subscribe(data => {
      this.transformers = data;
    }));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

