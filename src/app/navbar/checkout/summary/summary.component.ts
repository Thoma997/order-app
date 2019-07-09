import {Component} from '@angular/core';
import {OrderService} from '../../../order.service';
import {Article} from '../../../article';


@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent{
articles: Article[];
totalAmount: number;

  constructor(private orderService: OrderService) {
    this.orderService.getArticles().subscribe(value => {
      const currentArticles = value;
      for (let article of currentArticles) {
        article.price = parseFloat(String(article.price));
        article.amount = parseInt(String(article.amount));
      }
      this.articles = currentArticles;
    });

    this.orderService.getOrdersTotal().subscribe(value => {
      this.totalAmount = value;
    });
  }



}
