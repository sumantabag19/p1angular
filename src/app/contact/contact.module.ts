// import { CommonModule } from '@angular/common';
import { AddContactComponent } from './_components/add-contact/add-contact.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { ContactRoutingModule } from './contact-routing.module';

import { ContactDetailComponent } from './_components/contact-detail/contact-detail.component';
import { ContactListComponent } from './_components/contact-list/contact-list.component';

@NgModule({
  imports: [SharedModule, ContactRoutingModule],
  declarations: [ContactListComponent, ContactDetailComponent, AddContactComponent],
})
export class ContactModule {}
