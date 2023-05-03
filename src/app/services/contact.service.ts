import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  baseUrl: string = "http://localhost:5032/api/"
  constructor(private http: HttpClient) { }

  addContact(contactObj: any) {
    return this.http.post<any>(this.baseUrl + "contact", contactObj)
  }

}
