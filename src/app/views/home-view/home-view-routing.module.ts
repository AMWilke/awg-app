import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeViewComponent } from '@awg-views/home-view/home-view.component';

/* Routes of the PageNotFoundViewModule */
const homeViewRoutes: Routes = [
    {
        path: '',
        component: HomeViewComponent,
        data: { title: 'AWG Online Edition – Home' },
    },
];

/**
 * Routed components of the {@link HomeViewModule}:
 * {@link HomeViewComponent}.
 */
export const routedHomeViewComponents = [HomeViewComponent];

/**
 * HomeView module routing.
 *
 * It activates the homeViewRoutes.
 */
@NgModule({
    imports: [RouterModule.forChild(homeViewRoutes)],
    exports: [RouterModule],
})
export class HomeViewRoutingModule {}
