import { Component, OnInit } from '@angular/core';
import { Repo } from '../repo';


@Component({
  selector: 'app-search-repo',
  templateUrl: './search-repo.component.html',
  styleUrls: ['./search-repo.component.css']
})
export class SearchRepoComponent implements OnInit {

  repo: Repo;
  username:string;

  
  ngOnInit(){
  }

}
