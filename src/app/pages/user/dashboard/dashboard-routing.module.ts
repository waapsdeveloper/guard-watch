import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      }
      
    ]
  },  {
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

  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
