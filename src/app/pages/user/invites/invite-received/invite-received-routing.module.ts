import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InviteReceivedPage } from './invite-received.page';

const routes: Routes = [
  {
    path: '',
    component: InviteReceivedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InviteReceivedPageRoutingModule {}
