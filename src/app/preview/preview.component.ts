import { Component, OnInit } from '@angular/core';
import { Transformer } from '../models/transformer.class';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  transformers: Transformer[];

  constructor() { }

  ngOnInit() {
  }

}
