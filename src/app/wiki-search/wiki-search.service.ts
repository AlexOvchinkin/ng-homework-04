import {Injectable} from '@angular/core';
import {Subject} from "rxjs/Subject";
import {Jsonp, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/delay';

@Injectable()
export class WikiSearchService {

    public search: Subject<string> = new Subject<string>();
    public searchResult: Subject<any> = new Subject<any>();

    constructor(private jsonp: Jsonp) {
        this.search.subscribe((text: string) => {
            this.searchResult.next([['loading data ...']]);
            this.jsonp.get('https://en.wikipedia.org/w/api.php',
                {
                    params: {
                        callback: 'JSONP_CALLBACK',
                        action: 'opensearch',
                        format: 'json',
                        search: text
                    }
                })
                .delay(5000)
                .map((response: Response) => {
                    return response.json();
                })
                .subscribe( data => {
                    if (data && Array.isArray(data)) {
                        this.searchResult.next(data.slice(1))
                    }
                } );
        });
    }

}
