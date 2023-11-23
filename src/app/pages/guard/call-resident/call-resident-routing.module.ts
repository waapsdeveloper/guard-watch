import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CallResidentPage } from './call-resident.page';

const routes: Routes = [
  {
    path: '',
    component: CallResidentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CallResidentPageRoutingModule {}
