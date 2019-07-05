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

  orderArticleAmount = 0;
  articleOption = "Hinzufügen";
  submitted = false;
  ordersTotal = 0;

  constructor(private orderService: OrderService) {}

  onMinusOne(){
    this.orderArticleAmount === 0 ? this.orderArticleAmount = 0 : this.orderArticleAmount -= 1;

    if (this.submitted){
      this.articleOption = "Aktualisieren"
    }
  }

  onPlusOne() {
    this.orderArticleAmount += 1;

    if (this.submitted) {
      this.articleOption = "Aktualisieren"
    }
  }

  onSubmit(){

    if ((!this.submitted) && (this.articleOption === "Hinzufügen")) {
      this.orderService.addOrder(this.article, this.orderArticleAmount);
      this.submitted = true;
      this.articleOption = "Entfernen";
    }
    else if((this.submitted) && (this.articleOption === "Aktualisieren")) {
      this.orderService.editOrderAmount(this.article['id'], this.orderArticleAmount);
      this.submitted = true;
      this.articleOption = "Entfernen";
    }
    else if(this.articleOption === "Entfernen") {
      this.orderService.deleteOrder(this.article.id);
      this.orderArticleAmount = 0;
      this.submitted = false;
      this.articleOption = "Hinzufügen";
    }
  }

  onKeyup(){
    this.submitted  ? this.articleOption = "Aktualisieren" : null;
  }

}
