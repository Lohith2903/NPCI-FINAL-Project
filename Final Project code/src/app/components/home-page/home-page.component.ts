import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/classes/article';
import { Comments } from 'src/app/classes/comments';
import { Likes } from 'src/app/classes/likes';
import { User } from 'src/app/classes/user';
import { ArticleService } from 'src/app/services/article.service';
import { CommentsService } from 'src/app/services/comments.service';
import { LikesService } from 'src/app/services/likes.service';
import { NewsService } from 'src/app/services/news.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  
  //userName:string = sessionStorage.getItem("username")
  currentUsername = sessionStorage.getItem("username")
  categoryName:string
  newsResult:any
  article : Article = new Article()
  user : User = new User()
  like : Likes = new Likes()
  articleid : number
  userid : number
  isPresent : boolean
  likeCount : number = 0;
  isLiked : boolean
  usernamesList = new Array()
  commentObj = new Comments()
  commentsList : any[] = []
  isAdmin : boolean

  constructor(private router:Router,
    private newsService:NewsService,
    private userService:UserService,
    private likeService:LikesService,
    private articleService:ArticleService,
    private commentsService:CommentsService,
    private activatedRoute:ActivatedRoute) {
      this.router.routeReuseStrategy.shouldReuseRoute = function() {
        return false;
      };
    }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(routeParams => {
      this.categoryName=routeParams['categoryName']})
      console.log(this.categoryName)
      this.newsService.getArticles(this.categoryName).subscribe((result)=>{
        console.log(this.currentUsername);
        this.newsResult = result.articles;
    })
    }

  likeTheButton(title : string) {
  
    if(this.userService.isUserLoggedIn){

      this.articleService.presentInArticleTable(title).subscribe(data=>{

      if(data){

        this.articleService.findArticleDetails(title).subscribe(data=>{

          this.article = data
          console.log(this.article.articleId + "ArticleID found")
          this.like.articleId=this.article.articleId
          console.log(this.like.articleId + "like.articleID")
  
          this.userService.findByUserName(this.currentUsername).subscribe(data=>{
            this.isAdmin = data.isAdmin
            this.user = data
            this.like.userId=this.user.userId
            this.like.likeId = 0
            this.likeService.likePresentInLikesTable(this.article.articleId, this.user.userId).subscribe(data=>{

              if(data){

                this.likeService.deleteLikeByUserIDandArticleID(this.user.userId, this.article.articleId).subscribe(data=>{
                
                  this.isLiked=false
                  this.likeService.getLikesCount(this.like.articleId).subscribe(data=>{

                    console.log(data)
                    this.likeCount = data;
                  })
                })
              }
              else{
                this.likeService.saveLike(this.like).subscribe(data=>{
                  this.isLiked=true
                  this.likeService.getLikesCount(this.like.articleId).subscribe(data=>{
                    this.likeCount = data;
                  })
                })
              }
            })
          })
        })
      }
      else{
        //First fill the article table, then the like table
        this.article.title = title
        this.articleService.saveArticleDetails(this.article).subscribe(data=>{

          console.log(data)
          this.article=data
          this.like.articleId = this.article.articleId

          this.userService.findByUserName(this.currentUsername).subscribe(data=>{
            this.isAdmin = data.isAdmin
            this.user = data
            this.like.userId = this.user.userId
            this.likeService.saveLike(this.like).subscribe(data=>{
                  //           console.log(data)
              this.isLiked=true
              this.likeService.getLikesCount(this.like.articleId).subscribe(data=>{
                
                console.log(data)
                this.likeCount = data;
              })
            })
          })
        })
      }
      })
    }
    else{
      this.router.navigate(["login"])
    }
  }

  commentButton(title : string){
    
    if(this.userService.isUserLoggedIn){

      this.articleService.presentInArticleTable(title).subscribe(data=>{

      if(data){

        this.articleService.findArticleDetails(title).subscribe(data=>{
          this.article = data
          console.log(this.article.articleId + "ArticleID found")
          this.commentObj.articleId=this.article.articleId
          console.log(this.commentObj.articleId + "likecommentObj.articleID")

          this.userService.findByUserName(this.currentUsername).subscribe(data=>{

            this.isAdmin = data.isAdmin
            this.user = data
            this.commentObj.userId = this.user.userId
            this.commentObj.commentId = 0
            this.commentsService.saveComment(this.commentObj).subscribe(data=>{

                console.log(data)
                this.commentObj = new Comments()
              })
            })
          })
        }
        else{
          this.article.title = title
          this.article.articleId = 0
            this.articleService.saveArticleDetails(this.article).subscribe(data=>{

              console.log(data)
              this.article=data
              this.commentObj.articleId = this.article.articleId
              this.userService.findByUserName(this.currentUsername).subscribe(data=>{

                this.isAdmin = data.isAdmin
                this.user = data
                this.commentObj.userId = this.user.userId
                this.commentObj.commentId = 0
                this.commentsService.saveComment(this.commentObj).subscribe(data=>{

                  this.commentObj = new Comments()
              })
            })
          })
        }
      
      
      })
      }
      else{
        this.router.navigate(["login"])
      }
  }


  openArticleModal(title : string){

    this.articleService.presentInArticleTable(title).subscribe(data=>{

      console.log(data + "Inside openArticleModal - presentInArticleTable")

      if(data){

        this.articleService.findArticleDetails(title).subscribe(data=>{

        console.log(data.articleId + "Inside openArticleModal - findArticleDetails")
        this.getCommentsList(data.articleId)
        this.article = data
        this.likeService.getLikesCount(this.article.articleId).subscribe(data=>{

          this.likeCount = data
          if(this.userService.getLoggedStatus()){

            this.userService.findByUserName(this.currentUsername).subscribe(data=>{
              this.isAdmin = data.isAdmin
              this.user.userId = data.userId
              this.likeService.likePresentInLikesTable(this.article.articleId, this.user.userId).subscribe(data=>{
              
                if(data){

                this.isLiked=true
                }
                else{

                this.isLiked=false
                }
              });
            })
          }
          else{

            this.isLiked=false
          }
        })
        })  
      }
      else{
          this.isLiked = false
          this.likeCount = 0
      }
    })
    this.usernamesList.splice(0)
    this.commentsList = []
  }

  getCommentsList(articleid : number) {
    this.commentsService.getAllCommentsOfAnArticle(articleid).subscribe(data=>{

      console.log(data)
      this.commentsList = data
      this.commentsList.forEach(obj => this.getUsername(obj.userId));
    })
  }

  getUsername(userid : number) {
    this.userService.getUsernameByUserid(userid).subscribe(data=>{
      console.log(data.userName)
      this.usernamesList.push(data.userName)
    })
  }

  deleteComment(commentid : number){
    console.log(commentid)
    this.commentsService.deleteCommentByID(commentid).subscribe(data=>{
      console.log("Deleted comment - " + data)
      alert("Comment permanently deleted")
    })
  }

}

