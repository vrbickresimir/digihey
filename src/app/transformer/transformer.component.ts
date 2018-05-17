import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Transformer } from '../models/transformer.class';
import { AppService } from '../app.service';

@Component({
  selector: 'app-transformer',
  templateUrl: './transformer.component.html',
  styleUrls: ['./transformer.component.css']
})
export class TransformerComponent implements OnInit {
  @Input() transformer: Transformer;
  statusForm: FormGroup;

  constructor(private appService: AppService, private router: Router) { }

  ngOnInit() {
    this.setStatus()
  }

  setStatus() {
    let status = this.transformer.status;
    this.statusForm = new FormGroup({
      'status': new FormControl(status, Validators.required)
    });
  }

  onSelect(transformer: Transformer, index: number): void {
    this.appService.selectedItem.next(transformer);
    this.router.navigate(['edit', index]);
  }

  saveStatus() {
    console.log('nada');
  }

}
