import { EditBuComponent } from './edit-bu/edit-bu.component';
import { SharedModule } from '@shared';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { BusinessUnitRoutingModule } from './business-unit-routing.module';
import { BusinessUnitComponent } from './business-unit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, TranslateModule, SharedModule, BusinessUnitRoutingModule, FormsModule, ReactiveFormsModule],
  declarations: [BusinessUnitComponent, EditBuComponent],
})
export class BusinessUnitModule {}
