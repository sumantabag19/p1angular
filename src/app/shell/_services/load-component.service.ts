import { AddContactComponent } from './../../contact/_components/add-contact/add-contact.component';
import { ComponentFactoryResolver, Injectable, ViewContainerRef } from '@angular/core';
import { AddTaskComponent } from '@app/task/_components/add-task/add-task.component';
import { AddAccountComponent } from 'src/app/account/_components/add-account/add-account.component';
import { AddOpportunityComponent } from 'src/app/newopportunity/_components/add-opportunity/add-opportunity.component';

@Injectable({
  providedIn: 'root',
})
export class LoadComponentService {
  constructor(private cfr: ComponentFactoryResolver) {}

  async loadComponent(vcr: ViewContainerRef, mode: string) {
    const { RightSideBarComponent } = await import('./../_components/right-side-bar/right-side-bar.component');

    vcr.clear();

    let component: any = '';
    switch (mode) {
      case 'app':
        component = RightSideBarComponent;
        break;
      case 'contact':
        component = AddContactComponent;
        break;
      case 'task':
        component = AddTaskComponent;
        break;
      case 'account':
        component = AddAccountComponent;
        break;
      case 'opportunity':
        component = AddOpportunityComponent;
        break;
    }

    if (mode !== '') return vcr.createComponent(this.cfr.resolveComponentFactory(component));
  }
}
