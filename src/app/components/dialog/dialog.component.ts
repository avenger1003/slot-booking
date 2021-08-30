

import {Component, Inject, Input} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  title: String;
  editAppointment: Boolean;
  addAppointment: Boolean;
}

/**
 * @title Injecting data when opening a dialog
 */
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  title: String = '';
    constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {
    };
    
}


// @Component({
//   selector: 'dialog-data-example-dialog',
//   templateUrl: 'dialog-data-example-dialog.html',
// })
// export class DialogDataExampleDialog {
//   constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
// }