import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InviteDetailPage } from './invite-detail.page';

const routes: Routes = [
  {
    path: '',
    component: InviteDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InviteDetailPageRoutingModule {}
