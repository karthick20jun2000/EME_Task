import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-truck-in',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './truck-in.html',
  styleUrl: './truck-in.css',
})
export class TruckIn {
// getError(arg0: string) {
// throw new Error('Method not implemented.');
// }
  truckINForm: FormGroup;
  constructor(private formBuilder:FormBuilder){
    this.truckINForm=this.formBuilder.group(
      {
       // Basic Details
  receivingnumber: [''],
  datet: [''],

  // Vehicle & Driver Details
  vichilereg: ['', Validators.required],
  trailerreg: ['', Validators.required],
  transport: ['', Validators.required],
  drivername: ['', Validators.required],
  drivernrc: ['', Validators.required],

  // Weighbridge Details (First Weighing)
  weighbridgeserialno: ['', Validators.required],
  grossweightkg: ['', Validators.required],
  grossweightmt: [''],
  grosstime: [''],
  grossoperator: [''],

  // Commodity & Location
  supplier: ['', Validators.required],
  croptype: ['', Validators.required],
  materialvariety: [''],
  quantitypackaging: [''],
  offloadingpoint: ['', Validators.required],
  destinationsilobin: ['', Validators.required],
  area: [''],

  // Reference Information
  deliverynoteno: [''],
  customerfarmer: [''],
  grvno: [''],
  remarks: ['']


      }
    )
    
  }

   regestration() {
   console.log("hello") 
    if (this.truckINForm.invalid) {
    this.truckINForm.markAllAsTouched();
    return;
  }

  console.log(this.truckINForm.getRawValue());
  }
}
