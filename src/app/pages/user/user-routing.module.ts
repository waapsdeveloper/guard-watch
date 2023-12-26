import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardPageModule)
  },
  {
    path: 'passes',
    loadChildren: () => import('./passes/passes.module').then(m => m.PassesPageModule)
  },
  {
    path: 'contacts',
    loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsPageModule)
  },
  {
    path: 'request-pass',
    loadChildren: () => import('./request-pass/request-pass.module').then(m => m.RequestPassPageModule)
  },
  {
    path: 'create-pass',
    loadChildren: () => import('./passes/create-pass/create-pass.module').then(m => m.CreatePassPageModule)
  },
  {
    path: 'pass-detail',
    loadChildren: () => import('./passes/pass-detail/pass-detail.module').then(m => m.PassDetailPageModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./passes/create-pass/events/events.module').then(m => m.EventsPageModule)
  },
  {
    path: 'spaces',
    loadChildren: () => import('./spaces/spaces.module').then( m => m.SpacesPageModule)
  },
  {
    path: 'invites',
    loadChildren: () => import('./invites/invites.module').then( m => m.InvitesPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UserRoutingModule { }
