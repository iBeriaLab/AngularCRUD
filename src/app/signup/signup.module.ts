import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFireAuth } from 'angularfire2/auth';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';

@NgModule({
  imports: [
    CommonModule,
    SignupRoutingModule,
  ],
  declarations: [SignupComponent],
  providers: [AngularFireAuth]
})
export class SignupModule { }
