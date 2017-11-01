import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontLayoutComponent } from './frontlayout.component';

const routes: Routes = [
    {
        path: '', component: FrontLayoutComponent,
        children: [
            { path: 'home', loadChildren: './pages/fronthome/fronthome.module#FrontHomeModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FrontLayoutRoutingModule { }
