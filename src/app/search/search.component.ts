import { Component, OnInit } from '@angular/core';
import {Subject} from "rxjs/Subject";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public searchText: string = '';
  public enterStream: Subject<string> = new Subject<string>();

  constructor() { }

  ngOnInit() {
    this.enterStream.subscribe( (text: string) => {
      this.searchText = text;
    } );
  }

}
