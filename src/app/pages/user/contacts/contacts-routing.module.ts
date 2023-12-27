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
  {
    path: 'contact-details/:id',
    loadChildren: () => import('./contact-details/contact-details.module').then( m => m.ContactDetailsPageModule)
  },  {
    path: 'contact-detail-list',
    loadChildren: () => import('./contact-detail-list/contact-detail-list.module').then( m => m.ContactDetailListPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactsPageRoutingModule {}
