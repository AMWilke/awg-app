import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'awg-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    public searchTitle = 'Suche';
    public searchId = 'search';

    constructor(private router: Router) { }

    ngOnInit() {
        this.routeToSidenav();
    }

    public routeToSidenav(): void {
        this.router.navigate([{ outlets: { side: 'searchInfo' }}]);
    }

}