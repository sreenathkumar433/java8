import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { CustomerService } from './services/customer.service';
import {Customer} from './model/customer';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'sreenadh gottipati-angular';

  custId:number;
  customer:Customer;
  private service:CustomerService;

 constructor(service:CustomerService){
   this.service = service;
 }

  search(custId:number){
    this.service.findCustomer(custId)
      .subscribe(
      (x:any)=>{
          this.customer = x;
          console.log("Received Object "+x);
      });
  }

  
}
