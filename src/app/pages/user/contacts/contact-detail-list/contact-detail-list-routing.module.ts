import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactDetailListPage } from './contact-detail-list.page';

const routes: Routes = [
  {
    path: '',
    component: ContactDetailListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactDetailListPageRoutingModule {}
