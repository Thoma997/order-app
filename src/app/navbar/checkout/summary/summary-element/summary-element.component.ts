import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../../../../article';
import {OrderService} from '../../../../order.service';

@Component({
  selector: 'app-summary-element',
  templateUrl: './summary-element.component.html',
  styleUrls: ['./summary-element.component.css']
})
export class SummaryElementComponent implements OnInit{
@Input('articleItem')article: Article;
updateButton: string = "Entfernen";
shortTimeArticleAmount:number;
nanAlertClosed = true;
negativeAlertClosed = true;

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.shortTimeArticleAmount = this.article.amount;
  }

  onSubmit(id:string){
    if(this.shortTimeArticleAmount === 0 || this.updateButton === "Entfernen") {
      this.orderService.deleteOrder(id);
      this.createAlert("no");
    } else if(this.shortTimeArticleAmount > 0) {
      this.orderService.addOrder(id, this.shortTimeArticleAmount);
      this.updateButton = 'Entfernen';
      this.createAlert("no");
    } else if(this.shortTimeArticleAmount === null){
      this.shortTimeArticleAmount === this.article.amount;
      this.updateButton = 'Aktualisieren';
      this.createAlert("nan");
    }else if(this.shortTimeArticleAmount < 0){
      this.updateButton = 'Aktualisieren';
      this.createAlert("negative");
    }
  }

  createAlert(alertType: string){
    switch(alertType) {
      case("nan"):
        this.nanAlertClosed = false;
        this.negativeAlertClosed = true;
        break;
      case('negative'):
        this.nanAlertClosed = true;
        this.negativeAlertClosed = false;
        break;
      case("no"):
        this.nanAlertClosed = true;
        this.negativeAlertClosed = true;
        break;
    }
  }

  onInput(id:string ,event:any){
    console.log(event.target.value);
    if (event.target.value >= 0){
      this.updateButton = "Aktualisieren?";
      this.shortTimeArticleAmount = event.target.value;
    }
  }
}
