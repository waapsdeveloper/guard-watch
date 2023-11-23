import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactsPage } from './contacts.page';

const routes: Routes = [
  {
    path: '',
    component: ContactsPage,
    children: [
      {
        path: '',
        redirectTo: 'contact-list',
        pathMatch: 'full'
      },
      {
        path: 'contact-list',
        loadChildren: () => import('./contact-list/contact-list.module').then( m => m.ContactListPageModule)
      },
      {
        path: 'groups',
        loadChildren: () => import('./groups/groups.module').then( m => m.GroupsPageModule)
      },
      {
        path: 'favourites',
        loadChildren: () => import('./favourites/favourites.module').then( m => m.FavouritesPageModule)
      },
      {
        path: 'pre-approved',
        loadChildren: () => import('./pre-approved/pre-approved.module').then( m => m.PreApprovedPageModule)
      }
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactsPageRoutingModule {}
