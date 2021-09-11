import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

/**
 * @title Dialog Overview
 */


@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'slot-addition.component.html',
})
export class SlotAdditionComponent {

  constructor(
    public dialogRef: MatDialogRef<SlotAdditionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}


/**  Copyright 2021 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */