import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';
@Component({
  selector: 'app-purchase-pricing',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './purchase-pricing.html',
  styleUrl: './purchase-pricing.css',
})
export class PurchasePricing {
  purchaseForm :FormGroup;
  constructor(private formbuilder: FormBuilder){
    this.purchaseForm=this.formbuilder.group({
// Receiving Information
  receivingNo: [{ value: 'GRN-2026-000045', disabled: true }],
  receivingDateTime: [{ value: '2026-10-16T10:25', disabled: true }],

  supplier: [{ value: 'Sunrise Farmers Co-op', disabled: true }],
  cropType: [{ value: 'Maize', disabled: true }],
  horseReg:[{value:'ABZ 1234', disabled:true}],
  vehicleReg: [{ value: 'ABZ 1234', disabled: true }],
  trailerRegNo: [{ value: 'ABZ 5678', disabled: true }],
  transporter: [{ value: 'ABC Transport Ltd', disabled: true }],
  driverName: [{ value: 'John Phiri', disabled: true }],
  driverNrc: [{ value: '123456/12/1', disabled: true }],
  offloadingPoint: [{ value: 'Main Mill', disabled: true }],
  destinationSiloBin: [{ value: 'Silo 1 - Maize', disabled: true }],
  deliveryNoteNo: [{ value: 'M-2377', disabled: true }],
  grvNo: [{ value: '11060', disabled: true }],
  area: [{ value: 'WH-53', disabled: true }],
  materialVariety: [{ value: 'Maize - Grade A', disabled: true }],
  quantityPackaging: [{ value: 'Bags', disabled: true }],

  // Weight Details
  firstWeightGross: [{ value: 15620, disabled: true }],
  
  secondWeightTare: [{ value: 4550, disabled: true }],
  netWeight: [{ value: 11070, disabled: true }],
  deductionKg: [0, [Validators.required, Validators.min(0)]],
  realNetWeight: [{ value: 11070, disabled: true }],

  // Purchase Details
  purchaseRatePerMT: [250, [Validators.required, Validators.min(0.01)]],
  currency: ['USD', Validators.required],
  netQuantityMT: [{ value: 11.070, disabled: true }],
  totalAmountBeforeVAT: [{ value: 2767.50, disabled: true }],
  vatApplicable: [true, Validators.required],
  vatRate: ['16%', Validators.required],
  vatAmount: [{ value: 442.80, disabled: true }],
  totalAmountAfterVAT: [{ value: 3210.30, disabled: true }],

  // Additional Details
  paymentTerms: ['30 Days', Validators.required],
  contractReferenceNo: ['PO-2026-0125'],
  otherDeductions: [0, [Validators.required, Validators.min(0)]],
  deductionCurrency: ['USD', Validators.required],
  remarks: ['As per agreed rate.']
    })
  }



  submitForm(){
    console.log(this.purchaseForm.value)
  }
}
