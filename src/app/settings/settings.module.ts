import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { I18nModule } from '@app/i18n';
import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './_components/settings/settings.component';

@NgModule({
  imports: [CommonModule, TranslateModule, NgbModule, I18nModule, SettingsRoutingModule],
  declarations: [SettingsComponent],
})
export class SettingsModule {}
