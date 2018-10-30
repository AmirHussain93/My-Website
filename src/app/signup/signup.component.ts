import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm: FormGroup;

  constructor(private fb : FormBuilder, private auth : AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.signUpForm = this.fb.group({
      'firstName': [null, Validators.required],
      'lastName': [null, Validators.required],
      'email': [null, [Validators.required, Validators.email]],
      'password': [null, Validators.required]
    });
  }

  signUp(formData: NgForm) {
   return this.auth.registerUser(formData)
    .subscribe(
      response =>{
        console.log('Success', response);
        this.router.navigate(['Login']);
      }, 
      error => console.log('Fail', error)
    );
  }

}
