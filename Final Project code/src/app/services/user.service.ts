import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isUserLoggedIn = false

  private userUrl = "http://localhost:8080/api/user"; 

  constructor(private httpClient:HttpClient) { }

  getLoggedStatus(){
    return this.isUserLoggedIn;
  }

  setUserLoggedIn(){
    this.isUserLoggedIn = true;
  }

  setUserLoggedOut(){
    this.isUserLoggedIn = false;
  }

  getUsernameByUserid(userid : number) : Observable<User>{
    return this.httpClient.get<User>(this.userUrl+"/"+userid)
  }

  // used in login
  existsByUserNameAndPassword(username:String, password:String):Observable<User>{
    const userNameAndPasswordUrl = "http://localhost:8080/api/user/search/existsByUserNameAndPassword?username=" + username +"&password=" + password;
    return this.httpClient.get<User>(userNameAndPasswordUrl);
  }

  // used in signup
  existsByUserName(username:String):Observable<User>{
    const existsByUserNameUrl = "http://localhost:8080/api/user/search/existsByUserName?username"+username;
    return this.httpClient.get<User>(existsByUserNameUrl);
  }

  // get user details after login or signup
  findByUserName(username:String):Observable<User>{
    const findByUserNameUrl = "http://localhost:8080/api/user/search/findByUserName?username=" + username;
    return this.httpClient.get<User>(findByUserNameUrl);
  }

  // add new user after registration
  saveUser(user:User):Observable<User>{
    const httpOptions = {
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'auth-token',
        'Access-Control-Allow-origin':'*'
      })
    };
    return this.httpClient.post<User>(this.userUrl, user, httpOptions);
  }
}
