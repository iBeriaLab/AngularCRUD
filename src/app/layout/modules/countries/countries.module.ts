import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesRoutingModule } from './countries-routing.module'
import { CountriesComponent } from './countries.component'
import { PageHeaderModule } from '../../../shared';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

import {NgxPaginationModule} from 'ngx-pagination';

import { Ng4FilesModule } from 'angular4-files-upload';

@NgModule({
    imports: [
        CommonModule,
        CountriesRoutingModule,
        PageHeaderModule,
        NgbModule.forRoot(),
        FormsModule,
        ReactiveFormsModule,
        NgxPaginationModule,
        Ng4FilesModule,
        TranslateModule
    ],
    declarations: [CountriesComponent],
    providers: [
    ]
})
export class CountriesModule { }
