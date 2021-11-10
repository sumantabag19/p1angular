import { OpportunityComponent } from './opportunity.component';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: OpportunityComponent,
    data: { title: marker('Opportunity') },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpportunityRoutingModule {}
