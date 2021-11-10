import { LeadRoutingModule } from './lead-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadComponent } from './lead.component';

@NgModule({
  imports: [CommonModule, LeadRoutingModule],
  declarations: [LeadComponent],
})
export class LeadModule {}
