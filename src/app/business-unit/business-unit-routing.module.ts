import { BuListResolver } from './_resolvers/bu-list.resolver';
import { BusinessUnitComponent } from './business-unit.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

const routes: Routes = [
  {
    path: '',
    component: BusinessUnitComponent,
    data: { title: marker('Business Unit') },
    resolve: { data: BuListResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusinessUnitRoutingModule {}
