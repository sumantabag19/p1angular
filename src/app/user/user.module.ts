// import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../@shared';
import { UserRoutingModule } from 'src/app/user/user-routing.module';

import { AdduserComponent } from './_components/adduser/adduser.component';
import { UserdetailComponent } from './_components/userdetail/userdetail.component';

@NgModule({
  imports: [SharedModule, UserRoutingModule],
  declarations: [AdduserComponent, UserdetailComponent],
})
export class UserModule {}
