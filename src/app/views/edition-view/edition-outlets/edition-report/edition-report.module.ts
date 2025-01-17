import { NgModule } from '@angular/core';

import { SharedModule } from '@awg-shared/shared.module';
import { EditionTkaTableModule } from '@awg-views/edition-view/edition-outlets/edition-tka-table/edition-tka-table.module';

import { SourceListComponent } from './source-list';
import { SourceDescriptionComponent } from '@awg-views/edition-view/edition-outlets/edition-report/source-description';
import { SourceEvaluationComponent } from './source-evaluation';
import { TextcriticsListComponent } from './textcritics-list';

import { EditionReportRoutingModule, routedEditionReportComponents } from './edition-report-routing.module';

/**
 * The EditionReport module.
 *
 * It embeds the edition report components and their
 * [routing definition]{@link EditionReportRoutingModule}
 * as well as the {@link SharedModule}, {@link EditionTkaTableModule}
 * and the {@link TextcriticsListComponent}, {@link SourceListComponent},
 * {@link SourceDescriptionComponent}, and {@link SourceEvaluationComponent}.
 */
@NgModule({
    imports: [SharedModule, EditionTkaTableModule, EditionReportRoutingModule],
    declarations: [
        TextcriticsListComponent,
        SourceDescriptionComponent,
        SourceEvaluationComponent,
        SourceListComponent,
        routedEditionReportComponents,
    ],
})
export class EditionReportModule {}
