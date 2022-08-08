import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsHistoryComponent } from './components/comments-history/comments-history.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LikesHistoryComponent } from './components/likes-history/likes-history.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SignupPageComponent } from './components/signup-page/signup-page.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'news/top-headlines'},
  {path:'news/:categoryName', component:HomePageComponent},
  {path:'login', component:LoginPageComponent},
  {path:'signup', component:SignupPageComponent},
  {path:'like-history', component:LikesHistoryComponent},
  {path:'comment-history', component:CommentsHistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
