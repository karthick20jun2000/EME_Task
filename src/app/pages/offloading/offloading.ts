import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-offloading',
  imports: [ReactiveFormsModule],
  templateUrl: './offloading.html',
  styleUrl: './offloading.css',
})
export class Offloading {

offLoadingForm:FormGroup

constructor (private formbuilder:FormBuilder){
  this.offLoadingForm=this.formbuilder.group({
  // Receiving Header
 receivingnumber: [{ value: 'GRN-2026-000045', disabled: true }],
  datet: [{ value: '2026-10-16T10:25', disabled: true }],

  // Receiving Details (Read Only)
  supplier: [{ value: 'Sunrise Farmers Co-op', disabled: true }],
  croptype: [{ value: 'Maize', disabled: true }],
  vichilereg: [{ value: 'ABZ 1234', disabled: true }],
  trailerreg: [{ value: 'ABZ 5678', disabled: true }],
  transport: [{ value: 'ABC Transport Ltd', disabled: true }],
  drivername: [{ value: 'John Phiri', disabled: true }],
  drivernrc: [{ value: '123456/12/1', disabled: true }],
  offloadingpoint: [{ value: 'Main Mill', disabled: true }],
  destinationsilobin: [{ value: 'Silo 1 - Maize', disabled: true }],
  area: [{ value: 'WH-53', disabled: true }],

  // Weight Details (Second Weighing)
  grossweightkg: [{ value: 15620, disabled: true }],
  grossweightmt: [{ value: 15.620, disabled: true }],

  tareweightkg: [4550, [Validators.required, Validators.min(0)]],
  tareweightmt: [{ value: 4.550, disabled: true }],

  netweightkg: [{ value: 11070, disabled: true }],
  netweightmt: [{ value: 11.070, disabled: true }],

  deductionkg: [0, [Validators.min(0)]],
  deductionmt: [{ value: 0.000, disabled: true }],

  realnetweightkg: [{ value: 11070, disabled: true }],
  realnetweightmt: [{ value: 11.070, disabled: true }],

  // Times and Operator
  taretime: ['2026-10-16T10:42', Validators.required],
  tareoperator: ['OP2', Validators.required],
  offloadingcompletedtime: ['2026-10-16T10:45', Validators.required],

  // Remarks
  remarks: ['Offloading completed']
  }
)
}

regestration(){
  console.log('hello')

 if (this.offLoadingForm.invalid) {

    this.offLoadingForm.markAllAsTouched();


    return;
  }

  console.log('Form submitted successfully');

  console.log(this.offLoadingForm.value);


  
}
}
