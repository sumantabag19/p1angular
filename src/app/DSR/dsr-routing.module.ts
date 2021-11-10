import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { DailySalesReportComponent } from './_components/daily-sales-report/daily-sales-report.component';

const routes: Routes = [{ path: '', component: DailySalesReportComponent, data: { title: marker('DSR') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class DSRRoutingModule {}
