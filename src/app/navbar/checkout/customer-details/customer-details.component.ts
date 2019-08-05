import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {CustomerService} from '../../../customer.service';
import {OrderService} from '../../../order.service';
import {DateService} from '../../../date.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  constructor(private customerService:CustomerService,
              private orderService: OrderService,
              private dateService: DateService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    this.customerService.createCustomer(form.value.prename,
                                        form.value.name,
                                        form.value.adress,
                                        form.value.zip,
                                        form.value.city,
                                        form.value.phone,
                                        form.value.email,
                                        form.value.additions,
                                        form.value.payment_pickup_confirmation,
                                        form.value.agb_confirmation);

    this.customerService.sendInfoToApi();
    this.orderService.sendInfoToApi();
    this.dateService.sendInfoToApi();
  }
}
