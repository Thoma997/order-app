import {Component} from '@angular/core';
import {OrderService} from '../order.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{
  totalAmount: number;
  started = false;
  checkedout = false;
  featureSelected: string = 'kalte_speisen';
  selectedDate: Date;
  selectedTime: Date;

  constructor(private orderService: OrderService) {
    this.orderService.getOrdersTotal().subscribe(value => {
      this.totalAmount = value;
    });
  }


  onSelect(feature: string){
    this.featureSelected = feature;
    this.checkedout  = false;
  }

  onCheckout() {
    this.checkedout = true;
    console.log("Checkout true")
  }
  onSubmit(){
    this.started = true;

    console.log(this.selectedDate);
    console.log(this.selectedTime);
  }

}
