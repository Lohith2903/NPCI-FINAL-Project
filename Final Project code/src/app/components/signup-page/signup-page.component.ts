import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  user:User = new User();
  adminKey:string;
  
  constructor(private router:Router,
    private userService:UserService) { }

  ngOnInit(): void {
  }

  addUser() {
    if(this.adminKey == "admin1234"){
      this.user.isAdmin = true;
    }
    else{
      this.user.isAdmin = false;
    }
    this.userService.saveUser(this.user).subscribe(data => {
      console.log(data);
      this.userService.setUserLoggedIn();
      sessionStorage.setItem("username", this.user.userName)
      this.router.navigate(['/news/'+ 'top-headlines'])
    });
  }

}
