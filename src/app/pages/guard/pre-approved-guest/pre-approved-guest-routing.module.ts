import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreApprovedGuestPage } from './pre-approved-guest.page';

const routes: Routes = [
  {
    path: '',
    component: PreApprovedGuestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreApprovedGuestPageRoutingModule {}
