import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatePassPage } from './create-pass.page';

const routes: Routes = [
  {
    path: '',
    component: CreatePassPage,
  },  {
    path: 'events',
    loadChildren: () => import('./events/events.module').then( m => m.EventsPageModule)
  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatePassPageRoutingModule {}
