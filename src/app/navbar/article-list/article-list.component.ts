import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../../article';
import {ApiService} from '../../api.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  articles: Article[];
  @Input() selectedKey = 'kalte_speisen';

  keys: string[] = ['kalte_speisen', 'vorspeisen', 'hauptgerichte', 'desserts'];
  kalte_speisen: string[] = ['Fingerfood', 'Kalte Platten und Vorspeisen'];
  vorspeisen: string[] = ['Salate', 'Salate / Antipasti'];
  hauptgerichte: string[] = ['Warme Gerichte', 'Gemüse', 'Kartoffeln und Co'];
  desserts:string[] = ['Desserts'];

  constructor(private apiService: ApiService) {}

   ngOnInit(){
     this.apiService.readArticles().subscribe((articles: Article[]) => {
       this.articles = articles;
       console.log(this.articles);
     });
   }

}
