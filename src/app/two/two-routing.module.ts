import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TwoComponent } from './two.component';
import { TwoChildComponent } from './two-child/two-child.component';

const routes: Routes = [
  {
    path: '',
    component: TwoComponent,
    children: [
      {
        path: 'two-child',
        component: TwoChildComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [TwoComponent, TwoChildComponent],
  exports: [RouterModule, TwoComponent, TwoChildComponent]
})
export class TwoRoutingModule { }
