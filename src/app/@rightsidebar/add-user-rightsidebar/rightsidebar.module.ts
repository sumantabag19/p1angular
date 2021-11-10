// import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../@shared/shared.module';
import { AddUserRightSidebarRoutingModule } from '../add-user-rightsidebar/rightsidebar-routing.module';

import { AddUserRightsidebarComponent } from './add-user-rightsidebar.component';

@NgModule({
  imports: [SharedModule, AddUserRightSidebarRoutingModule],
  declarations: [AddUserRightsidebarComponent],
})
export class AddUserRightSidebarModule {}
