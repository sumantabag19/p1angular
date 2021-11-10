// import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../@shared';
import { DSRRoutingModule } from '../DSR/dsr-routing.module';

import { DailySalesReportComponent } from './_components/daily-sales-report/daily-sales-report.component';

@NgModule({
  imports: [SharedModule, DSRRoutingModule],
  declarations: [DailySalesReportComponent],
})
export class DSRModule {}
