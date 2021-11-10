import { AddAccountComponent } from './_components/add-account/add-account.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../@shared';
import { AccountRoutingModule } from '../account/account-routing.module';
import { AccountListComponent } from './_components/account-list/account-list.component';
import { AccountDetailsComponent } from './_components/account-details/account-details.component';
import { AccountHistoryComponent } from './_components/account-history/account-history.component';

@NgModule({
  imports: [SharedModule, AccountRoutingModule],
  declarations: [AddAccountComponent, AccountListComponent, AccountDetailsComponent, AccountHistoryComponent],
})
export class AccountModule {}
