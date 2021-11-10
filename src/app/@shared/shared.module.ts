import { CommonModule } from '@angular/common';
import { ConfirmDialogueComponent } from './confirm-dialogue/confirm-dialogue.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { LoaderComponent } from './loader/loader.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PaginationModule,
    ModalModule.forRoot(),
    CollapseModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 5000,
      preventDuplicates: true,
      newestOnTop: true,
      closeButton: true,
      disableTimeOut: false,
    }),
  ],
  declarations: [LoaderComponent, PaginationComponent, ConfirmDialogueComponent],
  exports: [
    LoaderComponent,
    PaginationComponent,
    ConfirmDialogueComponent,
    CommonModule,
    CollapseModule,
    ToastrModule,
    ModalModule,
    FormsModule,
    ReactiveFormsModule,
    PaginationModule,
  ],
})
export class SharedModule {}
