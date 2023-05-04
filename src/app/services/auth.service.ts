import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string = "https://localhost:7171/api/Auth/"
constructor(private http: HttpClient) { }

  register(userObj: any){
    return this.http.post<any>(this.baseUrl+"register", userObj)
  }

  login(loginObj: any) {
    return this.http.post<any>(this.baseUrl + "login", loginObj)
  }

  isLogin(){
    return !!localStorage.getItem("loggedIn")
  }


}
