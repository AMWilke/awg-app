import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditionGraphComponent } from './edition-graph.component';

/* routes of the EditionGraphModule */
const editionGraphRoutes: Routes = [
    {
        path: '',
        component: EditionGraphComponent
    }
];

/**
 * Routed components of the {@link EditionGraphModule}:
 * {@link EditionGraphComponent}.
 */
export const routedEditionGraphComponents = [EditionGraphComponent];

/**
 * EditionGraph module routing.
 *
 * It activates the editionGraphRoutes.
 */
@NgModule({
    imports: [RouterModule.forChild(editionGraphRoutes)],
    exports: [RouterModule]
})
export class EditionGraphRoutingModule {}