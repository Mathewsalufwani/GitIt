import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GitsearchService } from '../gitsearch.service';
import { User } from '../user';
import { Repo } from '../repo';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {

  user:User;
  repos:Repo;
  username:string;

  constructor(private searchService:GitsearchService, private http:HttpClient) {}
  submitGoal(){
    this.searchService.updateProfile(this.username);
    this.searchService.userRequest()
    this.user = this.searchService.user
  }
  ngOnInit() {
    
  }

}
