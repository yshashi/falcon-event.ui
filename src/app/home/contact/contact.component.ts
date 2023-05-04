import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ContactService } from 'src/app/services/contact.service';
import * as uuid from 'uuid';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public contactForm !: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private contactService: ContactService,private toastr: ToastrService) { }

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', CustomValidators.nameValidator],
      qId: [''],
      email:['', Validators.email],
      phone:[''],
      address:['', CustomValidators.nameValidator],
      comment:['', CustomValidators.nameValidator]
    })
  }

  submit() {
    if (this.contactForm.valid) {
      this.contactForm.value.qId = uuid.v4();
      this.contactService.addContact(this.contactForm.value)
      .subscribe(res=>{
        this.toastr.success("Contact Saved", "Sucess")
        this.contactForm.reset();
      },err=>{
        this.toastr.error("Something went Wrong", "Error")
      })
    }
  }

}

export class CustomValidators {
  static nameValidator(control: FormControl): any {
    const nameRegexp: RegExp = /[!@#$%^&*()_+\-=\[\]{};':"\\|<>\/?]/;
    if (control.value && nameRegexp.test(control.value)) {
      return { invalidName: true };
    }
  }
}
