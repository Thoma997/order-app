import {Injectable} from '@angular/core';
import {Article} from './article';
import {BehaviorSubject, Observable} from 'rxjs';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService{
  private total: BehaviorSubject<number>;
  private articles: BehaviorSubject<Article[]>;


  constructor(private apiService: ApiService){
    this.total = new BehaviorSubject<number>(0);
    this.articles = new BehaviorSubject<Article[]>([]);

    this.apiService.readArticles().subscribe((articles: Article[]) => {
      this.articles.next(articles);
    });
  }

  addOrder(id:string, amount:number){
    const currentArticles = this.articles.getValue();
    for ( let article of currentArticles) {
      if (article.id === id) {
        article.amount = amount;
      }
    }
    this.articles.next(currentArticles);

    this.updateOrdersTotal()
  }

  deleteOrder(id: string){
    const currentArticles = this.articles.getValue();
    for ( let article of currentArticles) {
      if (article.id === id) {
        article.amount = 0;
      }
    }
    this.articles.next(currentArticles);

    this.updateOrdersTotal();
  }

  updateOrdersTotal(){
    let total: number = 0.00;
    for (let article of this.articles.getValue()){
      total += Number((article.amount * parseFloat(String(article.price))).toFixed(2));
    }
    this.total.next(total);
  }

  getOrdersTotal(): Observable<number>{
    return this.total.asObservable();
  }

  getArticles(){
    return this.articles.asObservable();
  }

  sendInfoToApi(){
    let articles:Article[] = [];
    let total:number = 0;

    this.getArticles().subscribe(value => {
      articles = value;});

    this.getOrdersTotal().subscribe(value => {
      total = Number(value.toFixed(2));
    });


    this.apiService.sendOrderToApi(articles, total);
  }
}

