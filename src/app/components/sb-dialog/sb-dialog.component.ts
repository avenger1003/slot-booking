

import { Component, Inject, Input, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SbEditComponent } from '../sb-edit/sb-edit.component';

export interface DialogData {
  title: String;
  editAppointment: Boolean;
  addAppointment: Boolean;
  selectedEvent: any;
}

/**
 * @title Injecting data when opening a dialog
 */
@Component({
  selector: 'app-sb-dialog',
  templateUrl: './sb-dialog.component.html',
  styleUrls: ['./sb-dialog.component.scss']
})
export class SbDialogComponent {
  title : String = '';
  submit: boolean = false;
  selectedEvent: any;

  ngAfterViewInit() {
  }

  ngOnInit(): void {
  }
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData, private dialogRef: MatDialog) {
    this.selectedEvent = data.selectedEvent;
  };

  dialogSubmit(submit: any) {
    if (submit != undefined && submit.isFormValid) {
      this.dialogRef.closeAll();
    }
  }

}


// @Component({
//   selector: 'dialog-data-example-dialog',
//   templateUrl: 'dialog-data-example-dialog.html',
// })
// export class DialogDataExampleDialog {
//   constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
// }