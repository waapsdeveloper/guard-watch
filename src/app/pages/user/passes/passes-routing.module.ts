import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatePassPage } from './create-pass/create-pass.page';

import { PassesPage } from './passes.page';

const routes: Routes = [
  {
    path: '',
    component: PassesPage,
    children: [
      {
        path: '',
        redirectTo: 'active',
        pathMatch: 'full'
      },
      {
        path: 'active',
        loadChildren: () => import('./active/active.module').then(m => m.ActivePageModule)
      },
      {
        path: 'archeive',
        loadChildren: () => import('./archeive/archeive.module').then(m => m.ArcheivePageModule)
      },
      {
        path: 'sent',
        loadChildren: () => import('./sent/sent.module').then(m => m.SentPageModule)
      },
    ]
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
export class PassesPageRoutingModule { }
