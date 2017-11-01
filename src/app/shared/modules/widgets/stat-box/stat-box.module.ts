import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatBoxComponent } from './stat-box.component';
import { RouterModule } from '@angular/router';

import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        RouterModule
    ],
    declarations: [StatBoxComponent],
    exports: [StatBoxComponent]
})
export class StatBoxModule { }
