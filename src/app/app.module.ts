import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SearchComponent} from './search/search.component';
import {WikiSearchComponent} from './wiki-search/wiki-search.component';
import {HttpModule, JsonpModule} from '@angular/http';
import { ResultComponent } from './wiki-search/result/result.component';

@NgModule({
    declarations: [
        AppComponent,
        SearchComponent,
        WikiSearchComponent,
        ResultComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        JsonpModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
