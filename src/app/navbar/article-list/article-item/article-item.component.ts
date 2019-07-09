import {Component, Input} from '@angular/core';
import {Article} from '../../../article';
import {OrderService} from '../../../order.service';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css']
})
export class ArticleItemComponent {
  @Input('articleItem') article: Article;

  constructor(private orderService: OrderService) {

  }


  onMinusOne(){
    this.article.amount === 0 ? this.article.amount = 0 : this.orderService.addOrder(this.article.id, (this.article.amount - 1));
  }

  onPlusOne() {
    this.orderService.addOrder(this.article.id, (this.article.amount +1));
  }

  onSubmit(){
      this.orderService.deleteOrder(this.article.id);
  }
  onInput(){
    if (typeof this.article.amount === "number" && this.article.amount >= 0){
      this.orderService.addOrder(this.article.id, this.article.amount);
    }
  }
}
