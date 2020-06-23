import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import {environment } from './../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GitsearchService {

  private username: string;
  user: User;
  

  constructor(private http:HttpClient) {
    this.user = new User("","","","",0,0,new Date(),0);
    
   }

  updateProfile(username:string){
    this.username = username;
  }

  userRequest(){
    interface ApiResponse{
      login: string; 
      bio: string;
      name: string; 
      avatar_url: string; 
      followers: number; 
      following: number; 
      created_at: Date; 
      public_repos: number;
    }
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>(`${environment.apiUrl}${this.username}?client_id=${environment.apiKey}`).toPromise().then(response=>{
        this.user.login = response.login
        this.user.bio = response.bio
        this.user.name = response.name
        this.user.avatar_url = response.avatar_url
        this.user.followers = response.followers
        this.user.following = response.following
        this.user.created_at = response.created_at
        this.user.public_repos = response.public_repos

        resolve()
      },
      error=>{
        this.user.login = "You"
        this.user.bio = "Have"
        this.user.name = "An"
        this.user.avatar_url = "error"
        this.user.followers = 0
        this.user.following = 0
        this.user.created_at = new Date(2020,3,3)
        this.user.public_repos = 0

        reject(error)
      })
    })
    return promise
  }

  

}
