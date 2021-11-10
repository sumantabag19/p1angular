import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { Shell } from '../shell/_services/shell.service';
import { AdduserComponent } from './_components/adduser/adduser.component';
import { UserdetailComponent } from './_components/userdetail/userdetail.component';

const routes: Routes = [
  { path: '', component: AdduserComponent, data: { title: marker('User List') } },
  { path: 'userdetail', component: UserdetailComponent, data: { title: marker('User Detail') } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class UserRoutingModule {}
