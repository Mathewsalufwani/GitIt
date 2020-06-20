import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  user:User;

  constructor( private http:HttpClient ) { }

  ngOnInit() {
    interface ApiResponse{
      login:string;
      bio:string;
    }

    this.http.get<ApiResponse>("https://api.github.com/users/Mathewsalufwani?Authorization: token f03ef7af6eb4fa6a7e2fda8137b60ab8f165bfa2").subscribe(data=>{
      // Succesful API request
      this.user = new User(data.login, data.bio)
    })
  }

}
