import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  myForm !: any;
  @ViewChild('form') resetForm !: NgForm;
  constructor() { }

  onSubmit(){
    alert("Thank you for your message");
    this.myForm.reset();
  }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      fullName : new FormControl(null, Validators.required),
      email : new FormControl(null,[Validators.email,Validators.required]),
      comment : new FormControl(null,[Validators.required, Validators.minLength(20)])
    })
  }

}
