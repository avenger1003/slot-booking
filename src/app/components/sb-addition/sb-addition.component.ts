import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import * as doc from '../../../stub/doc-1.json';

@Component({
  selector: 'app-sb-addition',
  templateUrl: './sb-addition.component.html',
  styleUrls: ['./sb-addition.component.scss']
})
export class SbAdditionComponent implements OnInit {

  doctorsList: string[] = (doc.events as []);
  sb_addtionForm: FormGroup;
  isFormValid: boolean = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.sb_addtionForm = new FormGroup({
      doctor: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      contactNo: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      department: new FormControl('', [Validators.required]),
      experiance: new FormControl('', [Validators.required]),
      inTime: new FormControl('', [Validators.required]),
      outTime: new FormControl('', [Validators.required])
    });
  }

  @Output() dialogSubmit = new EventEmitter<boolean>();
  onFormSubmit(form: any) {
    form.isFormValid = this.formValidity(form);
    this.dialogSubmit.emit(form);
    console.log(form);
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  formValidity(form: any) {
    if (form.doctor != undefined && form.doctor != ''
      && form.gender != undefined && form.gender != ''
      && form.contactNo != undefined && form.contactNo != ''
      && form.department != undefined && form.department != ''
      && form.experiance != undefined && form.experiance != ''
      && form.inTime != undefined && form.inTime != ''
      && form.outTime != undefined && form.outTime != '') {
      return true;
    }
    else {
      return false;
    }
  }

  // matcher = new MyErrorStateMatcher();


}

// export class MyErrorStateMatcher implements ErrorStateMatcher {

//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     const isSubmitted = form && form.submitted;
//     return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
//   }
// }

