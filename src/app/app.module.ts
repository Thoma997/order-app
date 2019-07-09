import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ArticleListComponent } from './navbar/article-list/article-list.component';
import { ArticleItemComponent } from './navbar/article-list/article-item/article-item.component';
import { SummaryComponent } from './navbar/checkout/summary/summary.component';
import { CustomerDetailsComponent } from './navbar/checkout/customer-details/customer-details.component';
import {CheckoutComponent} from './navbar/checkout/checkout.component';
import { SummaryElementComponent } from './navbar/checkout/summary/summary-element/summary-element.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {OwlDateTimeModule, OwlNativeDateTimeModule} from 'ng-pick-datetime';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ArticleListComponent,
    ArticleItemComponent,
    CheckoutComponent,
    SummaryComponent,
    CustomerDetailsComponent,
    SummaryElementComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
