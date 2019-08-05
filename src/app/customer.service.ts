import { Injectable } from '@angular/core';
import {Customer} from './customer';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customer: Customer;

  constructor(private apiService: ApiService) {
  }

  createCustomer(prename,
                 name,
                 adress,
                 zip,
                 city,
                 phone,
                 email,
                 additions,
                 payment_pickup_confirmation,
                 agb_confirmation) {

    this.customer.prename = prename;
    this.customer.name = name;
    this.customer.adress = adress;
    this.customer.zip = zip;
    this.customer.city = city;
    this.customer.phone = phone;
    this.customer.email = email;
    this.customer.additions = additions;
    this.customer.payment_pickup_confirmed = payment_pickup_confirmation;
    this.customer.agb_comfirmed = agb_confirmation;
  }
  sendInfoToApi(){
    this.apiService.sendCustomerToApi(this.customer);
  }
}



