import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InviteDetailOwnerPage } from './invite-detail-owner.page';

const routes: Routes = [
  {
    path: '',
    component: InviteDetailOwnerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InviteDetailOwnerPageRoutingModule {}
