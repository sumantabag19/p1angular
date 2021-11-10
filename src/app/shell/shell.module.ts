import { AddPopupComponent } from './_components/add-popup/add-popup.component';
import { ComponentHostComponent } from './_components/component-host/component-host.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarModule } from 'ng-sidebar';

import { I18nModule } from '@app/i18n';
import { AuthModule } from '@app/auth';
import { ShellComponent } from './_components/shell/shell.component';
import { RightSideBarComponent } from './_components/right-side-bar/right-side-bar.component';
import { NavBarComponent } from './_components/nav-bar/nav-bar.component';
import { SideBarComponent } from './_components/side-bar/side-bar.component';
import { ProfileHostDirective } from './_directives/profile-host.directive';
@NgModule({
  imports: [CommonModule, TranslateModule, NgbModule, AuthModule, I18nModule, RouterModule, SidebarModule],
  declarations: [
    ShellComponent,
    ComponentHostComponent,
    SideBarComponent,
    NavBarComponent,
    RightSideBarComponent,
    ProfileHostDirective,
    AddPopupComponent,
  ],
})
export class ShellModule {}
