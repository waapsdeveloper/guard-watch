import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerifiedByGuardPage } from './verified-by-guard.page';

const routes: Routes = [
  {
    path: '',
    component: VerifiedByGuardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerifiedByGuardPageRoutingModule {}
