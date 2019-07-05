import { Injectable } from '@angular/core';
import {Order} from './order';
import {Article} from './article';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orders: Order[] = [];
  private total: BehaviorSubject<number>;


  constructor(){
    this.total = new BehaviorSubject<number>(0);
  }

  addOrder(article: Article, amount:number) {
    this.orders.push({article: article, amount: amount});
    let total = 0;
    for (let order of this.orders) {
      let subtotal = order.amount * parseFloat(order.article.price);
      total += subtotal;
    }
    this.total.next(total);
  }

  editOrderAmount(id: string, amount: number) {
    const index: number = this.orders.findIndex(article => article.article.id === id);
    let subtotal = this.total.getValue() + (parseFloat(this.orders[index].article.price) * (amount - this.orders[index].amount));
    this.total.next(subtotal);
    if(index !== -1) {
      this.orders[index].amount = amount;
    }
  }

  deleteOrder(id:string) {
    const index: number = this.orders.findIndex(article => article.article.id === id);
    if (index !== -1) {
      this.orders.splice(index, 1);
    }
  }

  getOrders() {
    return this.orders;
  }

  getOrdersTotal(): Observable<number>{
    return this.total.asObservable();
  }
}

