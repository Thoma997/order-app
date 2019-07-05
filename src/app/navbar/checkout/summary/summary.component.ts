import {AfterContentInit, Component} from '@angular/core';
import {Order} from '../../../order';
import {OrderService} from '../../../order.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements AfterContentInit{
orders: Order[];
  constructor(private orderService: OrderService) {}

  ngAfterContentInit(){
    this.orders = this.orderService.getOrders();
  }

}
