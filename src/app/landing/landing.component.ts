import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import {environment } from '../../environments/environment';

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
      created_at:Date;
      public_repos:number;
      
    }

    interface repoApiResponse{
      full_name:string;
    }

    this.http.get<ApiResponse>(environment.apiUrl +"Marhewsalufwani?client_id=" + environment.apiKey).subscribe(data=>{
      // Succesful API request
      this.user = new User(data.login, data.bio, data.name, data.avatar_url, data.followers, data.following, data.created_at, data.public_repos)
    })

    
  }

}
