import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@shared';
import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AgmCoreModule } from '@agm/core';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';

import {} from 'googlemaps';
import { GeolocationComponent } from './geolocation/geolocation.component';

@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDMjFLYeIpo-0uPD0auc-FU2JPYrq_Ole4',
    }),
    TranslateModule,
    SharedModule,
    HomeRoutingModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
  ],
  declarations: [DashboardComponent, GeolocationComponent],
})
export class HomeModule {}
