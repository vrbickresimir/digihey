import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

import { AppService } from '../app.service';
import { Transformer } from '../models/transformer.class';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  transformerForm: FormGroup;

  constructor(private route: ActivatedRoute, public appService: AppService) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    id ? this.updateForm(id) : this.initForm();
  }


  updateForm(index: number) {
    let gears = new FormArray([]);

    this.appService.selectedItem.subscribe(transformer => {

      if (transformer.gear) {
        for (let gear of transformer.gear)
          gears.push(new FormControl(gear));
      }
      this.transformerForm = new FormGroup({
        'name': new FormControl(transformer.name, Validators.required),
        'status': new FormControl(transformer.status, Validators.required),
        'vehicleGroup': new FormControl(transformer.vehicleGroup, Validators.required),
        'vehicleType': new FormControl('', Validators.required),
        'vehicleModel': new FormControl('', Validators.required),
        'gears': gears
      });
    })
  }

  initForm() {
    this.transformerForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'status': new FormControl('', Validators.required),
      'vehicleGroup': new FormControl('', Validators.required),
      'vehicleType': new FormControl('', Validators.required),
      'vehicleModel': new FormControl('', Validators.required),
      'gears': new FormArray([new FormControl()])
    });
  }

  onSubmit() {
    console.log('data: ', this.transformerForm);
    console.log((<FormArray>this.transformerForm.get('gears')).controls);
  }

  addNewGear() {
    (<FormArray>this.transformerForm.get('gears')).push(
      new FormControl()
    );
  }

}
