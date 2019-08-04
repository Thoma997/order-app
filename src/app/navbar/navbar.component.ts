import {Component} from '@angular/core';
import {OrderService} from '../order.service';
import {DateService} from '../date.service';

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

  constructor(private orderService: OrderService, private dateService: DateService) {
    this.orderService.getOrdersTotal().subscribe(value => {
      this.totalAmount = Number(value.toFixed(2));
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
  this.selectedDate.setHours(this.selectedTime.getHours());
  this.selectedDate.setMinutes(this.selectedTime.getMinutes());
  console.log(this.selectedDate);
  this.dateService.setPickupDate(this.selectedDate);

  }

}
