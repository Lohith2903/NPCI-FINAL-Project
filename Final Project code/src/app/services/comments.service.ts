import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Comments } from '../classes/comments';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  commentsURL = "http://localhost:8080/api/comments"

  constructor(
    private httpClient:HttpClient) { }

  saveComment(commentObj : Comments) : Observable<Comments>{
    console.log("Inside save comment")
    console.log(commentObj)
    const httpOptions = {
      headers : new HttpHeaders({
      'Content-type' : 'application/json',
      'Authorization' : 'auth-token',
      'Access-control-Allow-Origin' : '*'
    }
    )
  };
  return this.httpClient.post<Comments>(this.commentsURL, commentObj, httpOptions)
  }

  getAllCommentsOfAnArticle(articleID : number) : Observable<Comments[]>{
    const commentsOfAnArticleURL = "http://localhost:8080/api/comments/search/findByArticleId?articleId="+articleID
    return this.httpClient.get<getCommentsResponse>(commentsOfAnArticleURL).pipe(map(response => response._embedded.commentses))
  }

  deleteCommentByID(commentid : number) : Observable<any>{
    const httpOptions = {
      headers : new HttpHeaders({
          'Content-Type' : 'application/json',
          'Authorization' : 'auth-token',
          'Access-Control-Allow-Origin' : '*'
      })
    }
    return this.httpClient.delete<Comments>(this.commentsURL+`/${commentid}`,httpOptions)
  }
}

interface getCommentsResponse {
  _embedded : {
    commentses : Comments[]
  }
}
