import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(
    private httpClient: HttpClient) { }

  getArticles(category : string) : Observable<any>{
    console.log(category)
    if(category == 'top-headlines'){
      const headlinesURL = "https://newsapi.org/v2/top-headlines?country=in&apiKey=5bdf04df80bf41a4961336a86ccb871a"
      return this.httpClient.get(headlinesURL);
    }
    else if((category == 'entertainment') || (category == 'sports') || (category == 'technology') || (category == 'business') || (category == 'health') || (category == 'science')){
      const categoryURL = "https://newsapi.org/v2/top-headlines?category=" + category + "&country=in&apiKey=5bdf04df80bf41a4961336a86ccb871a"
      return this.httpClient.get(categoryURL);
    }
    else{
      const customSearchURL =  "https://newsapi.org/v2/everything?language=en&sortBy=publishAt&q="+category+"&apiKey=5bdf04df80bf41a4961336a86ccb871a"
      return this.httpClient.get(customSearchURL);
    }
    
  }

  getCustomArticles(url : string) : Observable<any>{
    return this.httpClient.get(url);
  }

}
