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
      name:string;
      avatar_url:string;
      followers:number;
      following:number;
      created_at:Date
    }

    this.http.get<ApiResponse>("https://api.github.com/users/Mathewsalufwani?Authorization: token d1b35c03b5f715d346ef08c8212b7875fa2f2c1e").subscribe(data=>{
      // Succesful API request
      this.user = new User(data.login, data.bio, data.name, data.avatar_url, data.followers, data.following, data.created_at)
    })
  }

}
