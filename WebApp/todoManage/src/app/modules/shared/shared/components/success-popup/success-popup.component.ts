import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-success-popup',
  templateUrl: './success-popup.component.html',
  styleUrls: ['./success-popup.component.scss'],
})
export class SuccessPopupComponent implements OnInit {
  successMsg?: string = '';

  constructor(
    public matDialogRef: MatDialogRef<SuccessPopupComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: { successMsg: string }
  ) {}

  ngOnInit(): void {
    this.successMsg = this.data?.successMsg ? this.data?.successMsg : '';
    this.closePopup();
  }

  closePopup(): void {
    setInterval(() => {
      this.matDialogRef.close({ closeStatus: 'closed' });
    }, 2000);
  }
}
