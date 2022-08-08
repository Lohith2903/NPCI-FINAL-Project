import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../classes/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  articleURL = "http://localhost:8080/api/article"

  constructor(
    private httpClient:HttpClient
  ) { }

  presentInArticleTable(title : string) : Observable<any> {
    const searchInArticleTableURL = "http://localhost:8080/api/article/search/existsByTitle?title="+title
    return this.httpClient.get<Article>(searchInArticleTableURL)
  }

  findArticleDetails(title: string) : Observable<Article>{
    const articleURL = "http://localhost:8080/api/article/search/findByTitle?title="+title
    return this.httpClient.get<Article>(articleURL)
  }

  saveArticleDetails(article : Article) : Observable<Article>{
    console.log(article + "Inside saveArticleDetails")

    const httpOptions = {
      headers : new HttpHeaders({
      'Content-type' : 'application/json',
      'Authorization' : 'auth-token',
      'Access-control-Allow-Origin' : '*'
    }
    )
  };
  return this.httpClient.post<Article>(this.articleURL, article, httpOptions)

}
}
