import { LoadComponentService } from './../../_services/load-component.service';
import { Component, OnInit, ViewChild, OnDestroy, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';
import { ProfileHostDirective } from '@app/shell/_directives/profile-host.directive';

@Component({
  selector: 'app-component-host',
  templateUrl: './component-host.component.html',
  styleUrls: ['./component-host.component.scss'],
})
export class ComponentHostComponent implements OnInit, OnDestroy, OnChanges {
  @ViewChild(ProfileHostDirective, { static: true })
  profileHost: ProfileHostDirective;
  @Input() mode: string;

  constructor(private profileService: LoadComponentService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.mode = changes.mode.currentValue;
    const viewContainerRef = this.profileHost.viewContainerRef;
    this.profileService.loadComponent(viewContainerRef, this.mode);
  }

  ngOnDestroy(): void {}

  ngOnInit() {
    const viewContainerRef = this.profileHost.viewContainerRef;
    this.profileService.loadComponent(viewContainerRef, this.mode);
  }
}
