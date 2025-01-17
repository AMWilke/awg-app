import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { delay, Observable } from 'rxjs';

import {
    EditionConstants,
    EditionRoute,
    EditionSeriesRoutes,
    EditionWork,
    EditionWorks,
} from '@awg-views/edition-view/models';
import { EditionService } from '@awg-views/edition-view/services';

/**
 * The EditionView component.
 *
 * It contains the edition view section of the app
 * with a {@link HeadingComponent} and
 * another router outlet for the edition routes.
 */
@Component({
    selector: 'awg-edition-view',
    templateUrl: './edition-view.component.html',
    styleUrls: ['./edition-view.component.css'],
})
export class EditionViewComponent implements OnInit {
    /**
     * Public variable: editionViewTitle
     *
     * It keeps the title of the edition view section.
     */
    editionViewTitle = 'Inhalt';

    /**
     * Public variable: editionViewId.
     *
     * It keeps the id of the edition view section.
     */
    editionViewId = 'awg-edition-view';

    /**
     * Public variable: editionRoute.
     *
     * It keeps the base edition route.
     */
    editionRoute: EditionRoute = EditionConstants.EDITION;

    /**
     * Public variable: isRowTableView$.
     *
     * Observable that keeps the information
     * about the flag for the row table view.
     */
    isRowTableView$: Observable<boolean>;

    /**
     * Public variable: seriesRoute.
     *
     * It keeps the base series route.
     */
    seriesRoute: EditionRoute = EditionConstants.SERIES;

    /**
     * Public variable: selectedEditionComplex$.
     *
     * Observable that keeps the information
     * about the current edition complex.
     */
    selectedEditionComplex$: Observable<EditionWork>;

    /**
     * Public variable: selectedEditionSeries$.
     *
     * It keeps the selected series of the edition as an Observable of EditionSeriesRoutes.
     */
    selectedEditionSeries$: Observable<EditionSeriesRoutes>;

    /**
     * Public variable: selectedEditionSection$.
     *
     * It keeps the selected section of the edition as an Observable of EditionRoute.
     */
    selectedEditionSection$: Observable<EditionRoute>;

    /**
     * Constructor of the EditionViewComponent.
     *
     * It declares private instances of
     * EditionService, ActivatedRoute and Router.
     *
     * @param {EditionService} editionService Instance of the EditionService.
     * @param {ActivatedRoute} route Instance of the Angular ActivatedRoute.
     * @param {Router} router Instance of the Angular router.
     */
    constructor(private editionService: EditionService, private route: ActivatedRoute, private router: Router) {}

    /**
     * Angular life cycle hook: ngOnInit.
     *
     * It calls the containing methods
     * when initializing the component.
     */
    ngOnInit() {
        this.routeToSidenav();
        this.getSelectionsFromRoute();
    }

    /**
     * Public method: getSelectionsFromRoute.
     *
     * It loads the selected series, section, and edition complex from the edition service (if given).
     *
     * @returns {void} Gets the selected series, section, and edition complex from the edition service.
     */
    getSelectionsFromRoute(): void {
        this.selectedEditionSeries$ = this.editionService.getSelectedEditionSeries().pipe(delay(0));
        this.selectedEditionSection$ = this.editionService.getSelectedEditionSection().pipe(delay(0));
        this.selectedEditionComplex$ = this.editionService.getEditionWork().pipe(delay(0));
        this.isRowTableView$ = this.editionService.getIsRowTableView().pipe(delay(0));
    }

    /**
     * Public method: routeToSidenav.
     *
     * It activates the secondary outlet with the edition-info.
     *
     * @returns {void} Activates the edition-info side outlet.
     */
    routeToSidenav(): void {
        // Opens the side-info outlet while preserving the router fragment for scrolling
        this.router.navigate([{ outlets: { side: 'editionInfo' } }], {
            preserveFragment: true,
        });
    }
}
