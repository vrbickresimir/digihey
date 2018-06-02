import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Transformer } from '../models/transformer.class';
import { AppService } from '../app.service';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { map, startWith } from 'rxjs/operators';


@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit, OnDestroy {

  transformers: Transformer[];
  filteredTransformers: Observable<Transformer[]>;
  subscription: Subscription = new Subscription();
  options: string[] = [];
  filterControl: FormControl = new FormControl();
  filteredOptions: Observable<string[]>;


  constructor(public appService: AppService) { }

  ngOnInit() {
    this.subscription.add(this.appService.getTransformers().subscribe(data => {
      this.transformers = data;
    },null, () => {
      this.transformers.forEach( transformer => {
        console.log(transformer);
        this.options.push(transformer.name);
      })
      this.filteredOptions = this.filterControl.valueChanges
      .pipe(
        startWith(''),
        map(val => this.filter(val))
      );
      this.filteredTransformers = this.filterControl.valueChanges.pipe(
        startWith(''),
        map(value => this.filter2(value))
      )
    }));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  filter(val: string): string[] {
    return this.options.filter(option =>
      option.toLowerCase().includes(val.toLowerCase()));
  }
  filter2(name: string): Transformer[] {
    return this.transformers.filter( transformer => 
      transformer.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()));
  }

}

