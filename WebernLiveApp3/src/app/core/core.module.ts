import { NgModule, SkipSelf, Optional } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { PageModule } from './page/page.module';

import { CornerRibbonComponent } from './corner-ribbon';
import { FooterComponent } from './footer';
import { HeaderComponent } from './header';
import { DialogComponent, DialogService } from './dialog';

import { MenuService, MetaService } from './services';


@NgModule({
    imports: [
        RouterModule,
        SharedModule,
        PageModule
    ],
    declarations: [
        CornerRibbonComponent,
        DialogComponent,
        FooterComponent,
        HeaderComponent
    ],
    exports: [
        PageModule,
        CornerRibbonComponent,
        DialogComponent,
        FooterComponent,
        HeaderComponent
    ],
    entryComponents: [
        DialogComponent
    ],
    providers: [ DialogService, MenuService, MetaService ]
})

export class CoreModule {
    constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}