import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormArray, Form } from '@angular/forms';

import { AppService } from '../app.service';
import { Transformer } from '../models/transformer.class';
import { VehicleTypes } from '../models/vehicleTypes.class';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnDestroy {

  id: number;
  transformerForm: FormGroup;
  formReady: boolean = false;
  optionsArray: VehicleTypes[] = [];
  groupOptions = [];
  typeOptions = [];
  modelOptions = [];
  subscription: Subscription = new Subscription();

  constructor(private route: ActivatedRoute, public appService: AppService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.id ? this.updateForm(this.id) : this.initForm();
    this.createUniqueSets();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
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
    this.formReady = !this.formReady;
  }

  updateForm(index: number) {
    let gears = new FormArray([]);
    let transformer: Transformer

    this.subscription.add(this.appService.getTransformers().subscribe((transformers: Transformer[]) => {
      transformer = transformers.find((transformer: Transformer) =>
        transformer.id == index
      );

      if (transformer.gear) {
        for (let gear of transformer.gear)
          gears.push(new FormControl(gear));
      }
      this.transformerForm = new FormGroup({
        'name': new FormControl(transformer.name, Validators.required),
        'status': new FormControl(transformer.status, Validators.required),
        'vehicleGroup': new FormControl(transformer.vehicleGroup, Validators.required),
        'vehicleType': new FormControl(transformer.vehicleType, Validators.required),
        'vehicleModel': new FormControl(transformer.vehicleModel, Validators.required),
        'gears': gears
      });

      this.formReady = !this.formReady;

    }));
  }

  addNewGear() {
    (<FormArray>this.transformerForm.get('gears')).push(
      new FormControl()
    );
  }

  deleteGear(index: number) {
    (<FormArray>this.transformerForm.get('gears')).removeAt(index);
  }

  get gearControls() {
    return (<FormArray>this.transformerForm.get('gears')).controls;
    // this.transformerForm.get('gears').controls
  }

  createUniqueSets() {
    let group = [];
    let type = [];
    let model = [];

    this.subscription.add(this.appService.getOptions().subscribe(options => {

      this.optionsArray = options;

      options.forEach(option => {
        group.push(option.group);
        type.push(option.type);
        model.push(option.model);
      })

      this.groupOptions = Array.from(new Set(group));
      this.typeOptions = Array.from(new Set(type));
      this.modelOptions = Array.from(new Set(model));
    }));
  }

  updateTypeOptions(option: string) {
    let selectObj = []
    let type = [];

    selectObj = this.optionsArray.filter(opt =>
      opt['group'] == option
    );
    selectObj.forEach(obj => {
      type.push(obj.type);
    });
    this.typeOptions = Array.from(new Set(type));
    this.transformerForm.get('vehicleModel').disable();
  }

  updateModelOptions(option: string) {
    let selectObj = []
    let model = [];

    selectObj = this.optionsArray.filter(opt =>
      opt['type'] == option
    );
    selectObj.forEach(obj => {
      model.push(obj.model);
    });
    this.modelOptions = Array.from(new Set(model));
    this.transformerForm.get('vehicleModel').enable();
  }

  clear() {
    this.transformerForm.reset();
  }

  onSubmit() {
    console.log('data: ', this.transformerForm);
  }

}
