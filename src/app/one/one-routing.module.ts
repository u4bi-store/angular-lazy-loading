import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OneComponent } from './one.component';
import { OneChildComponent } from './one-child/one-child.component';

const routes: Routes = [
  {
    path: '',
    component: OneComponent,
    children: [
      {
        path: 'one-child',
        component: OneChildComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations : [OneComponent, OneChildComponent],
  exports: [RouterModule, OneComponent, OneChildComponent]
})
export class OneRoutingModule { }
