import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from './article';
import {Observable} from 'rxjs';
import {Customer} from './customer';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  customer: Customer;
  order: Order;
  pickupDate: Date;
  pickupBranch: string;

  PHP_API_SERVER = 'http://127.0.0.1:8080';

  constructor(private httpClient: HttpClient) {}

  readArticles(): Observable<Article[]> {
    return this.httpClient.get<Article[]>(`${this.PHP_API_SERVER}/api/read.php`);
  }









  sendCustomerToApi(customer:Customer){
    this.customer = customer;
  }
  sendOrderToApi(articles: Article[], amount:number){
    this.order.a
  }
  sendPickupToApi(date:Date, branch:string){
    this.pickupDate = date;
    this.pickupBranch = branch;
  }
}
