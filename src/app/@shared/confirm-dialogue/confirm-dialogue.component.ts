import { Component, OnInit, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-confirm-dialogue',
  templateUrl: './confirm-dialogue.component.html',
  styleUrls: ['./confirm-dialogue.component.scss'],
})
export class ConfirmDialogueComponent implements OnInit {
  event: EventEmitter<any> = new EventEmitter();

  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit() {}

  confirm() {
    this.event.emit(true);
    this.bsModalRef.hide();
  }
}
