import { Component, EventEmitter, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-add-popup',
  templateUrl: './add-popup.component.html',
  styleUrls: ['./add-popup.component.scss'],
})
export class AddPopupComponent implements OnInit {
  public event: EventEmitter<any> = new EventEmitter();

  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit() {}

  addContact() {
    this.triggerSubmitEvent('contact');
  }

  addTask() {
    this.triggerSubmitEvent('task');
  }

  addAccount() {
    this.triggerSubmitEvent('account');
  }
  addOpportunity() {
    this.triggerSubmitEvent('opportunity');
  }
  triggerSubmitEvent(mode: string) {
    this.event.emit(mode);
  }
}
