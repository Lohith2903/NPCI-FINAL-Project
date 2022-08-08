import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  username:string
  password:string
  
  constructor(private userService:UserService,
    private router:Router) { }

  ngOnInit(): void {
  }

  loginSubmit() {
    this.userService.existsByUserNameAndPassword(this.username, this.password).subscribe(data => {
      if(data){
        console.log(data)
        this.userService.setUserLoggedIn();
        sessionStorage.setItem("username", this.username)
        this.router.navigate(['/news/' + 'top-headlines'])
      }
      else{
        alert('Invalid credentials');
      }
      
    })
  }

}
