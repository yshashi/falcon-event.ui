import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';
import * as uuid from 'uuid';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public contactForm !: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private contactService: ContactService) { }

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: [''],
      qId: [''],
      email:[''],
      phone:[],
      address:[''],
      comment:['']
    })
  }

  submit() {
    if (this.contactForm.valid) {
      this.contactForm.value.qId = uuid.v4();
      this.contactService.addContact(this.contactForm.value)
      .subscribe(res=>{
        alert("Contact Added!");
        this.contactForm.reset();
      },err=>{
        alert("Something went wrong!")
      })
    }
  }

}
