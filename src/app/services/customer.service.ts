import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../model/customer';
import {AppModule} from '../app.module';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  public static API_URL="http://localhost:8080/";

  private http:HttpClient;

  constructor(httpClient:HttpClient) { 
    this.http=httpClient;
  }

  findCustomer(id:number){
    return this.http
      .get(CustomerService.API_URL
          +"customers/find-by-id/"
          +id);
  }

}
