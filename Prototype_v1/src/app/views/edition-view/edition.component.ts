import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'awg-edition-view',
    templateUrl: './edition.component.html',
    styleUrls: ['./edition.component.css']
})
export class EditionViewComponent implements OnInit {

    public editionTitle = 'Beispieledition ausgewählter Skizzen zu <em>Vier Lieder</em> op. 12, Nr. 1';
    public editionId = 'edition';

    constructor(private router: Router) { }

    ngOnInit() {
        this.routeToSidenav();
    }

    public routeToSidenav(): void {
        this.router.navigate([{ outlets: { side: 'editionInfo' }}]);
    }

}