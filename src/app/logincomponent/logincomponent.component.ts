import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignupcomponentComponent } from '../signupcomponent/signupcomponent.component';
import {FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule} from '@angular/forms';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-logincomponent',
  templateUrl: './logincomponent.component.html',
  styleUrls: ['./logincomponent.component.css']
})
export class LogincomponentComponent implements OnInit {
  loginForm: FormGroup;
  public redirectingTo;
  constructor(public dialog: MatDialog, private formBuilder: FormBuilder, private route: Router) {
    this.loginForm = this.formBuilder.group({
      mailId: ['', [Validators.required, Validators.email]],
      password : ['' , [Validators.required, Validators.pattern('^.{8,15}$')]]
    });
   }
  ngOnInit(): void {
  }
  openSignupdialog(): void {
    this.dialog.open(SignupcomponentComponent, {width: '50%'});
  }

  redirectTorestuarantPage() {
    if (this.loginForm.valid) {
     this.route.navigate(['/', 'restuarants']);
     this.dialog.closeAll();
    }
  }

  get loginDetails() {
    return this.loginForm.controls;
    
  }
}
