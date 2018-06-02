import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { map, startWith } from 'rxjs/operators';

import { Transformer } from '../models/transformer.class';
import { AppService } from '../app.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit, OnDestroy {

  transformers: Transformer[];
  filteredTransformers: Observable<Transformer[]>;
  subscription: Subscription = new Subscription();
  filterControl: FormControl = new FormControl();

  constructor(public appService: AppService) { }

  ngOnInit() {
    this.subscription.add(this.appService.getTransformers().subscribe(data => {
      this.transformers = data;
    }, null, () => {
      this.filteredTransformers = this.filterControl.valueChanges.pipe(
        startWith(''),
        map(value => this.filter(value))
      )
    }));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  filter(name: string): Transformer[] {
    return this.transformers.filter(transformer =>
      transformer.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()));
  }

}

