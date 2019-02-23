import { fn } from '@angular/compiler/src/output/output_ast';

export class Customer {
     customerId:Number;
	 firstName:String;
	 lastName:String;
	 phoneNo:String;
     email:String;
    
    constructor(id:number, fname:string, lname:string, email:string, phone:string){
        this.customerId=id;
        this.firstName=fname;
        this.lastName=lname;
        this.email=email;
        this.phoneNo=phone;
    }
}
