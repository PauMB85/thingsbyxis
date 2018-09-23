import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  emailFormControl: FormGroup;
  constructor() { }

  ngOnInit() {
    this.initEmailSuscriber();
  }

  onSubmit() {
    console.log(this.emailFormControl);
  }


  private initEmailSuscriber() {
    this.emailFormControl = new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required, Validators.email]
      })
    });
  }

}
