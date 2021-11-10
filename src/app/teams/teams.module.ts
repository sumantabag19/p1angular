import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsRoutingModule } from './teams-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MembersComponent } from './_components/members/members.component';
import { SubteamsComponent } from './_components/subteams/subteams.component';
import { TeamsComponent } from './_components/teams/teams.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [TeamsComponent, SubteamsComponent, MembersComponent],
  imports: [CommonModule, TeamsRoutingModule, FormsModule, ReactiveFormsModule, TranslateModule],
})
export class TeamsModule {}
