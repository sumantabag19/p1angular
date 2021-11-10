import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { AddUserRightsidebarComponent } from './add-user-rightsidebar.component';

const routes: Routes = [
  { path: '', component: AddUserRightsidebarComponent, data: { title: marker('Add User Right Sidebar') } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AddUserRightSidebarRoutingModule {}
