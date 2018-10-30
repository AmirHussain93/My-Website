import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactUsForm: FormGroup;

  constructor(private fb : FormBuilder) { }

  ngOnInit() {
    this.contactUsForm = this.fb.group({
      'firstname': [null, Validators.required],
      'lastname': [null, Validators.required],
      'email': [null, [Validators.required, Validators.email]],
      'message': [null, Validators.required]
    });
  }

  contactUs(formData: NgForm) {
    console.log(formData);
  }

}
