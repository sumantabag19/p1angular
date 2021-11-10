import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { TaskComponent } from './_components/task/task.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { TaskHistoryComponent } from './_components/task-history/task-history.component';

const routes: Routes = [
  {
    path: '',
    component: TaskComponent,
    data: { title: marker('Task ') },
  },
  {
    path: 'task-history',
    component: TaskHistoryComponent,
    data: { title: marker('Task History') },
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class TaskRoutingModule {}
