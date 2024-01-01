import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicSpaceByIdPage } from './public-space-by-id.page';

const routes: Routes = [
  {
    path: '',
    component: PublicSpaceByIdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicSpaceByIdPageRoutingModule {}
