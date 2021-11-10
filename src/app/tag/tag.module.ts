// import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../@shared';
import { TagRoutingModule } from '../tag/tag-routing.module';

import { AddTagComponent } from './_components/add-tag/add-tag.component';

@NgModule({
  imports: [SharedModule, TagRoutingModule],
  declarations: [AddTagComponent],
})
export class TagModule {}
