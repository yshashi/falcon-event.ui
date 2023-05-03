import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm !: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: [''],
      password: ['']
    })
  }

  login() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(res=>{
        alert("Login Success");
        this.router.navigate(['/main']);
        this.loginForm.reset();
        localStorage.setItem("loggedIn", "true");
      },err=>{
        alert("Something went wrong!")
      });
    }
  }

}
