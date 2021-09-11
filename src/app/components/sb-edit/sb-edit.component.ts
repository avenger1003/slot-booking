import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import * as doc from '../../../stub/doc-1.json';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

@Component({
  selector: 'app-sb-edit',
  templateUrl: './sb-edit.component.html',
  styleUrls: ['./sb-edit.component.scss']
})
export class SbEditComponent implements OnInit {

  doctorsList: string[] = (doc.events as []);
  sb_editForm : FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.sb_editForm = new FormGroup({
      doctor: new FormControl([Validators.required]),
      gender: new FormControl('', [Validators.required]),
      contactNo: new FormControl(this.doctorsList[0], [Validators.required]),
      email: new FormControl('', [Validators.required]),
      department: new FormControl('', [Validators.required]),
      experiance: new FormControl('', [Validators.required]),
      inTime: new FormControl('', [Validators.required]),
      outTime: new FormControl('', [Validators.required])
    });

    this.sb_editForm.controls['doctor'].setValue(this.selectedEvent._def.title, { onlySelf: true })
    this.sb_editForm.controls['gender'].setValue(this.selectedEvent._def.extendedProps.gender, { onlySelf: true })
    this.sb_editForm.controls['contactNo'].setValue(this.selectedEvent._def.extendedProps.contactNo, { onlySelf: true })
    this.sb_editForm.controls['email'].setValue(this.selectedEvent._def.extendedProps.email, { onlySelf: true })
    this.sb_editForm.controls['department'].setValue(this.selectedEvent._def.extendedProps.department, { onlySelf: true })
    this.sb_editForm.controls['experiance'].setValue(this.selectedEvent._def.extendedProps.experiance, { onlySelf: true })
    this.sb_editForm.controls['inTime'].setValue(this.selectedEvent._def.extendedProps.inTime, { onlySelf: true })
    this.sb_editForm.controls['outTime'].setValue(this.selectedEvent._def.extendedProps.outTime, { onlySelf: true })

    this.selectedEvent.isFormValid = false;
  }

  @Output() dialogSubmit = new EventEmitter<any>();
  @Input() selectedEvent: any;

  onFormSubmit(form: any) {
    if (this.formValidity(form)) {
      this.selectedEvent.isFormValid = true;
      this.dialogSubmit.emit(this.selectedEvent);
    }
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


