import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpacesPage } from './spaces.page';

const routes: Routes = [
  {
    path: '',
    component: SpacesPage,
    children: [

    ]

  },
  {
    path: 'details/:id',
    loadChildren: () => import('./space-detail/space-detail.module').then( m => m.SpaceDetailPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpacesPageRoutingModule {}
