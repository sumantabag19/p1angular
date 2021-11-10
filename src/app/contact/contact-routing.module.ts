import { ContactHistoryComponent } from './_components/contact-history/contact-history.component';
import { AddContactComponent } from './_components/add-contact/add-contact.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { ContactDetailComponent } from './_components/contact-detail/contact-detail.component';
import { ContactListComponent } from './_components/contact-list/contact-list.component';

const routes: Routes = [
  { path: '', component: ContactListComponent, data: { title: marker('Contact List') } },
  { path: 'add-contact', component: AddContactComponent, data: { title: marker('New Contact') } },
  { path: 'contact-details', component: ContactDetailComponent, data: { title: marker('Contact Details') } },
  { path: 'contact-history', component: ContactHistoryComponent, data: { title: marker('Contact History') } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class ContactRoutingModule {}
