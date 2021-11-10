import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss'],
})
export class AccountDetailsComponent implements OnInit {
  constructor() {}
  calllog: boolean = true;
  journal: boolean = true;
  public event: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {}
}
