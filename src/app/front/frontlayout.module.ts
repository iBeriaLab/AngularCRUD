import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

import { FrontLayoutRoutingModule } from './frontlayout-routing.module';
import { FrontLayoutComponent } from './frontlayout.component'
import { FrontnavbarComponent, FrontfooterComponent } from './includes';

import { NgxPermissionsModule } from 'ngx-permissions';

@NgModule({
    imports: [
        CommonModule,
        NgbDropdownModule.forRoot(),
        NgxPermissionsModule.forChild({
            permissionsIsolate: true,
            rolesIsolate: true}),
        FrontLayoutRoutingModule,
        TranslateModule
    ],
    declarations: [
        FrontLayoutComponent,
        FrontnavbarComponent,
        FrontfooterComponent
    ]
})
export class FrontLayoutModule { }
