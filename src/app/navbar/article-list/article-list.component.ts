import {Component, Input} from '@angular/core';
import {Article} from '../../article';
import {OrderService} from '../../order.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent {
  articles: Article[];
  @Input() selectedKey = 'kalte_speisen';

  keys: string[] = ['kalte_speisen', 'vorspeisen', 'hauptgerichte', 'desserts'];
  kalte_speisen: string[] = ['Fingerfood', 'Kalte Platten und Vorspeisen'];
  vorspeisen: string[] = ['Salate', 'Salate / Antipasti'];
  hauptgerichte: string[] = ['Warme Gerichte', 'Gemüse', 'Kartoffeln und Co'];
  desserts:string[] = ['Dessert'];

  constructor(private orderService: OrderService) {
    this.orderService.getArticles().subscribe(value => {

      const currentArticles = value;

      for (let article of currentArticles) {
        article.price = parseFloat(String(article.price));
        article.amount = parseInt(String(article.amount));
      }

      this.articles = currentArticles;
      console.log(this.articles);
    });
  }

}
