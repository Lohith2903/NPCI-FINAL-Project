import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Likes } from '../classes/likes';

@Injectable({
  providedIn: 'root'
})
export class LikesService {

  likesURL = "http://localhost:8080/api/likes"

  constructor(
    private httpClient:HttpClient
  ) { }

  likePresentInLikesTable(articleId: number, userId: number){
    const searchInLikesTableURL = "http://localhost:8080/api/likes/search/existsByArticleIdAndUserId?articleId="+articleId+"&userId="+userId
    return this.httpClient.get<Likes>(searchInLikesTableURL)
  }

  deleteLikeByUserIDandArticleID(userid : number, articleid : number) : Observable<number>{
    console.log(userid + "Inside delete" + articleid)
    const likeDeleteURL = "http://localhost:8080/api/likes/search/deleteByUserIdAndArticleId?userId="+userid+"&articleId="+articleid
    const httpOptions = {
      headers : new HttpHeaders({
          'Content-Type' : 'application/json',
          'Authorization' : 'auth-token',
          'Access-Control-Allow-Origin' : '*'
      })
    }
    return this.httpClient.get<number>(likeDeleteURL, httpOptions)
    
  }

  getLikesCount(articleID : number) : Observable<any>{
    const likeCountURL = "http://localhost:8080/api/likes/search/countByArticleId?articleId=" + articleID
    return this.httpClient.get<Likes>(likeCountURL) 
  }

  saveLike(like : Likes) : Observable<Likes>{
    console.log("like in savelike method")
    console.log(like)

    const httpOptions = {
      headers : new HttpHeaders({
      'Content-type' : 'application/json',
      'Authorization' : 'auth-token',
      'Access-control-Allow-Origin' : '*'
    }
    )
  };
  return this.httpClient.post<Likes>(this.likesURL, like, httpOptions)
  }

  
}
