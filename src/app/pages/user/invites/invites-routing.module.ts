import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvitesPage } from './invites.page';

const routes: Routes = [
  {
    path: '',
    component: InvitesPage
  },
  {
    path: 'invite-detail',
    loadChildren: () => import('./invite-detail/invite-detail.module').then(m => m.InviteDetailPageModule)
  },
  {
    path: 'invite-create',
    loadChildren: () => import('./invite-create/invite-create.module').then(m => m.InviteCreatePageModule)
  },
  {
    path: 'invite-detail-owner',
    loadChildren: () => import('./invite-detail-owner/invite-detail-owner.module').then(m => m.InviteDetailOwnerPageModule)
  },
  {
    path: 'invite-received',
    loadChildren: () => import('./invite-received/invite-received.module').then(m => m.InviteReceivedPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvitesPageRoutingModule { }
