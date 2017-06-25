import {Component, OnInit} from '@angular/core';
import {SearchComponent} from "../search/search.component";
import {WikiSearchService} from "./wiki-search.service";


@Component({
    selector: 'app-wiki-search',
    templateUrl: './wiki-search.component.html',
    styleUrls: ['./wiki-search.component.css'],
    providers: [WikiSearchService]
})
export class WikiSearchComponent extends SearchComponent implements OnInit {

    public searchResult;

    constructor(public wikiSearch: WikiSearchService) {
        super();
        this.wikiSearch.searchResult.subscribe( (text) => {
            this.searchResult = text;
        } );
    }

    search(value: string) {
        this.wikiSearch.search(value);
    }

    ngOnInit() {
        super.ngOnInit();
    }
}
