import { TaskRoutingModule } from './task-routing.module';
import { NgModule } from '@angular/core';
import { TaskComponent } from './_components/task/task.component';
import { AddTaskComponent } from './_components/add-task/add-task.component';
import { SharedModule } from '@shared';

import { TranslateModule } from '@ngx-translate/core';

import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { TaskHistoryComponent } from './_components/task-history/task-history.component';
import { RouterModule } from '@angular/router';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  imports: [
    SharedModule,
    TaskRoutingModule,
    TranslateModule,
    TimepickerModule.forRoot(),
    PopoverModule.forRoot(),
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    RouterModule,
  ],
  declarations: [TaskComponent, AddTaskComponent, TaskHistoryComponent],
})
export class TaskModule {}
