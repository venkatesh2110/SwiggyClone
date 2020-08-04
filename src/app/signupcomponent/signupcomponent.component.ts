import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LogincomponentComponent } from '../logincomponent/logincomponent.component';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-signupcomponent',
  templateUrl: './signupcomponent.component.html',
  styleUrls: ['./signupcomponent.component.css']
})
export class SignupcomponentComponent implements OnInit {
  signupForm: FormGroup;
  public signupDialogClose = false;
  constructor(public dialog: MatDialog, private formBuilder: FormBuilder, private snackbar: MatSnackBar) {
    this.signupForm = this.formBuilder.group({
      phoneNumber: [null, [Validators.required, Validators.pattern('[0-9]{10}')]],
      name: ['', [Validators.required, Validators.pattern('[A-Za-z0-9_@./#&+-]{1,150}')]],
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('^.{8,15}$')]]
    });
  }

  ngOnInit(): void {
  }
  openLogindialog() {
    this.dialog.open(LogincomponentComponent, {width: '50%'});
  }
  get signupDetails() {
    return this.signupForm.controls;
  }

  openSignupSnackbar(message) {
    if (this.signupForm.valid) {
      const snackbarRef = this.snackbar.open(message, null, {duration: 2000});
      this.dialog.closeAll();
      this.dialog.open(LogincomponentComponent, {width: '50%'});
    }
  }
}