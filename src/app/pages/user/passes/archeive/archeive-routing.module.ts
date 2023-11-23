import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArcheivePage } from './archeive.page';

const routes: Routes = [
  {
    path: '',
    component: ArcheivePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArcheivePageRoutingModule {}
