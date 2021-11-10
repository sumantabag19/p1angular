import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { LeadComponent } from './lead.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: LeadComponent,
    data: { title: marker('Lead') },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeadRoutingModule {}
