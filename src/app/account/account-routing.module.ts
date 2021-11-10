import { AddAccountComponent } from './_components/add-account/add-account.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { AccountListComponent } from './_components/account-list/account-list.component';
import { AccountDetailsComponent } from './_components/account-details/account-details.component';
import { AccountHistoryComponent } from './_components/account-history/account-history.component';

const routes: Routes = [
  //{ path: '', component: AddAccountComponent, data: { title: marker('Add-Account ') } },
  { path: '', component: AccountListComponent, data: { title: marker('Account List') } },
  { path: 'account-details', component: AccountDetailsComponent, data: { title: marker('Account Detail') } },
  { path: 'account-history', component: AccountHistoryComponent, data: { title: marker('Account History') } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AccountRoutingModule {}
