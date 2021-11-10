import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TeamsComponent } from './_components/teams/teams.component';

const routes: Routes = [
  {
    path: '',
    component: TeamsComponent,
    data: { title: marker('Teams') },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamsRoutingModule {}
