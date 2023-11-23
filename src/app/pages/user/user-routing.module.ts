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
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'passes',
    loadChildren: () => import('./passes/passes.module').then( m => m.PassesPageModule)
  },
  {
    path: 'contacts',
    loadChildren: () => import('./contacts/contacts.module').then( m => m.ContactsPageModule)
  },
  {
    path: 'request-pass',
    loadChildren: () => import('./request-pass/request-pass.module').then( m => m.RequestPassPageModule)
  },
  {
    path: 'create-pass',
    loadChildren: () => import('./create-pass/create-pass.module').then( m => m.CreatePassPageModule)
  },
  {
    path: 'pass-detail',
    loadChildren: () => import('./passes/pass-detail/pass-detail.module').then( m => m.PassDetailPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UserRoutingModule { }
