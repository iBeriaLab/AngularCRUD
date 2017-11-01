import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    NgbCarouselModule,
    NgbAlertModule
} from '@ng-bootstrap/ng-bootstrap';

import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

import { FrontHomeRoutingModule } from './fronthome-routing.module';
import { FronthomeComponent } from './fronthome.component';


import {NgxPaginationModule} from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        NgbModule.forRoot(),
        FrontHomeRoutingModule,
        NgxPaginationModule,
        TranslateModule
    ],
    declarations: [
        FronthomeComponent,
    ],
    providers: [
    ]
})
export class FrontHomeModule { }
