import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm !: FormGroup;
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router, private toastr:ToastrService) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      firstName: [''],
      lastName:[''],
      username: [''],
      password: ['']
    })
  }

  register(){
    if(this.registerForm.valid){
      this.auth.register(this.registerForm.value).subscribe(res=>{
        alert("Registered Success");
        this.toastr.success("Register Success", "Success")
        this.registerForm.reset();
        this.router.navigate(['login'])
      }, err => {
        this.toastr.error("Something went Wrong", "Error")
      })
    }
  }

}
