import {Component} from '@angular/core';
import {OrderService} from '../../../order.service';
import {Article} from '../../../article';
import {DateService} from '../../../date.service';


@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent{
  articles: Article[];
  totalAmount: number;
  pickupBranch: string;
  pickupDate: string;
  dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };

  constructor(private orderService: OrderService, private dateService: DateService) {
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

    this.pickupDate = this.dateService.getPickupDate().toLocaleDateString('de-DE', this.dateOptions);
    this.pickupBranch = this.dateService.getBranch();
  }



}
