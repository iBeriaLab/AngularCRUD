import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module'
import { PostsComponent } from './posts.component'
import { PageHeaderModule } from '../../../shared';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LimitPipes } from '../../../shared/pipes/limit-pipes.module'

import {NgxPaginationModule} from 'ngx-pagination';

import { Ng4FilesModule } from 'angular4-files-upload';

import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    PostsRoutingModule,
    PageHeaderModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng4FilesModule,
    TranslateModule
  ],
  declarations: [PostsComponent, LimitPipes],
  providers: [
  ]
})
export class PostsModule { }
