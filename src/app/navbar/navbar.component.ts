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

  constructor(private orderService: OrderService) {
    this.orderService.getOrdersTotal().subscribe(value => {
      this.totalAmount = value;
    });
  }


  onSelect(feature: string){
    this.featureSelected = feature;
    this.checkedout  = false;
  }

  onStart(value:boolean) {
    this.started = value;
    console.log("Started true")
  }

  onCheckout() {
    this.checkedout = true;
    console.log("Checkout true")
  }
  onClickSubmit(value){

  }

}
