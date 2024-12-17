import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {
  private url='http://localhost:8080/residents';

  constructor(private http:HttpClient) { }


 


}
