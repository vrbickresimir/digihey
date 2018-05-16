import { Component, OnInit, Input } from '@angular/core';
import { Transformer } from '../models/transformer.class';

@Component({
  selector: 'app-transformer',
  templateUrl: './transformer.component.html',
  styleUrls: ['./transformer.component.css']
})
export class TransformerComponent implements OnInit {
  @Input() transformer: Transformer;

  constructor() { }

  ngOnInit() {
  }

}
