import { NgModule, SkipSelf, Optional } from '@angular/core';

import { SharedModule } from '@awg-shared/shared.module';
import { FooterModule } from './footer/footer.module';

import { NavbarComponent } from './navbar/navbar.component';
import { ViewContainerComponent } from './view-container/view-container.component';

@NgModule({
    imports: [SharedModule, FooterModule],
    declarations: [NavbarComponent, ViewContainerComponent],
    exports: [NavbarComponent, ViewContainerComponent, FooterModule]
})
export class CoreModule {
    constructor(
        @Optional()
        @SkipSelf()
        parentModule: CoreModule
    ) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}