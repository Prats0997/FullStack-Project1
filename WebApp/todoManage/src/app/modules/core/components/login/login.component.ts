import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { SuccessPopupComponent } from 'src/app/modules/shared/shared/components/success-popup/success-popup.component';
import { HarcodedAuthenticationService } from '../../service/harcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userName: string = '';
  passWord: string = '';
  validLogin?: boolean = true;
  loginForm = this.fb.group({
    username: ['', Validators.required],
    userpassword: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    public matDialog: MatDialog,
    private router: Router,
    public harcodedAuthenticationService: HarcodedAuthenticationService) { }

  ngOnInit(): void {}

  login(): void{
    if (this.harcodedAuthenticationService.authenticateUser(this.userName?.toLowerCase() ,  this.passWord?.toLowerCase())) {
      this.validLogin = true;
      const dialogRef = this.matDialog.open(SuccessPopupComponent, {
        width: '744px',
        panelClass: 'success-popup-container',
        disableClose: true,
        data: {
          successMsg: 'You have logged in successfully',
        },
      });
      dialogRef.afterClosed().subscribe((result: any) => {
        if (result?.closeStatus?.toLowerCase() == 'closed') {
          this.router.navigate(['landing-page']);
        }
      });
    } else {
      this.validLogin = false;
    }
    this.initialiseLoginForm();
  }

  initialiseLoginForm(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      userpassword: ['', Validators.required],
    });
  }

  forgotPassword(): void {
    alert('Forgot Password');
  }
}
