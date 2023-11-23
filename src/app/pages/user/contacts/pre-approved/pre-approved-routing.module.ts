import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreApprovedPage } from './pre-approved.page';

const routes: Routes = [
  {
    path: '',
    component: PreApprovedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreApprovedPageRoutingModule {}
