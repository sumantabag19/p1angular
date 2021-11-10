import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from '@core';
import { SharedModule } from '@shared';
import { ShellModule } from './shell/shell.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SettingsModule } from './settings/settings.module';

import { AuthModule } from '@app/auth';
import { HomeModule } from './home/home.module';
import { ContactModule } from './contact/contact.module';
import { OpportunityModule } from './opportunity/opportunity.module';
import { TaskModule } from './task/task.module';
import { LeadModule } from './lead/lead.module';
import { BusinessUnitModule } from './business-unit/business-unit.module';
import { UserModule } from 'src/app/user/user.module';
import { TeamsModule } from 'src/app/teams/teams.module';
import { AccountModule } from './account/account.module';
import { NewOpportunityModule } from './newopportunity/newopportunity.module';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TagModule } from './tag/tag.module';
import { DSRModule } from './DSR/dsr.module';
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    NgbModule,
    CoreModule,
    SharedModule,
    ShellModule,
    HomeModule,
    BusinessUnitModule,
    LeadModule,
    TaskModule,
    OpportunityModule,
    AuthModule,
    ContactModule,
    AppRoutingModule, // must be imported as the last module as it contains the fallback route
    SettingsModule, // must be imported as the last module as it contains the fallback route

    UserModule,
    TeamsModule,
    AccountModule,
    NewOpportunityModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    TagModule,
    DSRModule,
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
