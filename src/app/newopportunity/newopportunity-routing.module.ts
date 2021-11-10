import { AddOpportunityComponent } from './_components/add-opportunity/add-opportunity.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { OpportunityListComponent } from './_components/opportunity-list/opportunity-list.component';
import { OpportunityFunnelViewComponent } from './_components/opportunity-funnel-view/opportunity-funnel-view.component';
import { OpportunityDetailsComponent } from './_components/opportunity-details/opportunity-details.component';

const routes: Routes = [
  //{ path: '', component: AddAccountComponent, data: { title: marker('Add-Account ') } },
  { path: '', component: OpportunityListComponent, data: { title: marker('Opportunity List') } },
  {
    path: 'opportunity-funnel',
    component: OpportunityFunnelViewComponent,
    data: { title: marker('Opportunity List Funnel') },
  },
  {
    path: 'opportunity-details',
    component: OpportunityDetailsComponent,
    data: { title: marker('Opportunity Details') },
  },
  { path: 'add-opportunity', component: AddOpportunityComponent, data: { title: marker('Add Opportunity') } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class NewOpportunityRoutingModule {}
