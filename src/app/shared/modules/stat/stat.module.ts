import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatComponent } from './stat.component';

import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

@NgModule({
    imports: [
        CommonModule,
        TranslateModule
    ],
    declarations: [StatComponent],
    exports: [StatComponent]
})
export class StatModule { }
