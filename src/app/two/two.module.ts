import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TwoRoutingModule } from './two-routing.module';
import { TwoComponent } from './two.component';
import { TwoChildComponent } from './two-child/two-child.component';

@NgModule({
  imports: [
    CommonModule,
    TwoRoutingModule
  ],
  declarations: [TwoComponent, TwoChildComponent]
})
export class TwoModule { }
