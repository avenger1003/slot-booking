

import {Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
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
    constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}

// @Component({
//   selector: 'dialog-data-example-dialog',
//   templateUrl: 'dialog-data-example-dialog.html',
// })
// export class DialogDataExampleDialog {
//   constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
// }