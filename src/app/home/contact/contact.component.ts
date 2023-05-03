import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public contactForm !: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: [''],
      qid: [''],
      email:[''],
      contact:[],
      address:[''],
      comment:['']
    })
  }

  submit() {
    if (this.contactForm.valid) {
      this.router.navigate(['/main'])
    }
  }

}
