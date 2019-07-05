import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from './article';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  PHP_API_SERVER = 'http://127.0.0.1:8080';

  constructor(private httpClient: HttpClient) {}

  readArticles(): Observable<Article[]> {
    return this.httpClient.get<Article[]>(`${this.PHP_API_SERVER}/api/read.php`);
  }


}
