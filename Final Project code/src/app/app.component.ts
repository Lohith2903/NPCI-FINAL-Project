import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from './services/article.service';
import { NewsService } from './services/news.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'news';

  newsResult:any[]
  qAttribute:string

  constructor(public router:Router,
    public newsService:NewsService,
    public userService:UserService,
    public articleService:ArticleService) {}

  goToPage(categoryName:string) {
    console.log(categoryName)
    this.router.navigate(['/news/' + categoryName])
  }

  goToLoginPage() {
    this.router.navigate(['login'])
  }

  logoutSubmit(){
    if(confirm('Are you sure you want to logout?')){
      this.userService.setUserLoggedOut()
      sessionStorage.clear()
      this.router.navigate([""])
    }
  }

}
