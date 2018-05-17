import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Transformer } from '../models/transformer.class';
import { DATA } from './../data';
import { AppService } from '../app.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  transformers: Transformer[];


  constructor(public appService: AppService, private router: Router) { }

  ngOnInit() {
    this.appService.getTransformers().subscribe( data => {
      this.transformers = data;
    })
  }

}
