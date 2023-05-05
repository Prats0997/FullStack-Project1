import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userName: string = '';
  passWord: string = '';
  validLogin?: boolean = false;
  loginForm = this.fb.group({
    username : ['', Validators.required],
    userpassword: ['', Validators.required]
  });
  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  login(): void{
    if(this.userName?.toLowerCase() == 'admin' && this.passWord?.toLowerCase() == 'admin'){
      this.validLogin = true;
    }else{
      this.validLogin = false;
    }
  }

}
