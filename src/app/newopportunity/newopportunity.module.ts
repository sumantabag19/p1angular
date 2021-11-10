import { AddOpportunityComponent } from './_components/add-opportunity/add-opportunity.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../@shared';
import { NewOpportunityRoutingModule } from '../newopportunity/newopportunity-routing.module';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { OpportunityListComponent } from './_components/opportunity-list/opportunity-list.component';
import { OpportunityFunnelViewComponent } from './_components/opportunity-funnel-view/opportunity-funnel-view.component';
import { OpportunityDetailsComponent } from './_components/opportunity-details/opportunity-details.component';

@NgModule({
  imports: [SharedModule, NewOpportunityRoutingModule, BsDatepickerModule.forRoot(), DatepickerModule.forRoot()],
  declarations: [
    AddOpportunityComponent,
    OpportunityListComponent,
    OpportunityFunnelViewComponent,
    OpportunityDetailsComponent,
  ],
})
export class NewOpportunityModule {}
