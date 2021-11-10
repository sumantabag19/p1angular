import { OpportunityRoutingModule } from './opportunity-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpportunityComponent } from './opportunity.component';

@NgModule({
  imports: [CommonModule, OpportunityRoutingModule],
  declarations: [OpportunityComponent],
})
export class OpportunityModule {}
