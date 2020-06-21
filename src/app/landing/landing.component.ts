import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { Repo } from '../repo';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  user:User;
  repo:Repo;

  constructor( private http:HttpClient ) { }

  ngOnInit() {
    interface ApiResponse{
      login:string;
      bio:string;
      name:string;
      avatar_url:string;
      followers:number;
      following:number;
      created_at:Date;
      public_repos:number;
      
    }

    interface repoApiResponse{
      full_name:string;
    }

    this.http.get<ApiResponse>("https://api.github.com/users/Mathewsalufwani?Authorization: token 68aba20afd5a1fa2e4b541cefb496075806e2507").subscribe(data=>{
      // Succesful API request
      this.user = new User(data.login, data.bio, data.name, data.avatar_url, data.followers, data.following, data.created_at, data.public_repos)
    })

    this.http.get<repoApiResponse>("https://api.github.com/users/Mathewsalufwani/repos?client_id=68aba20afd5a1fa2e4b541cefb496075806e2507").subscribe(data=>{
      // Succesful API request
      this.repo = new Repo(data.full_name)
    })
  }

}
