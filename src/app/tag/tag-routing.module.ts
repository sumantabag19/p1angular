import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { AddTagComponent } from './_components/add-tag/add-tag.component';

const routes: Routes = [{ path: '', component: AddTagComponent, data: { title: marker('Add Tag') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class TagRoutingModule {}
