import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FronthomeComponent } from './fronthome.component';

const routes: Routes = [
    { path: '', component: FronthomeComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FrontHomeRoutingModule { }
