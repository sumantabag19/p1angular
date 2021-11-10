import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/_services/shell.service';

const routes: Routes = [
  Shell.childRoutes([{ path: 'about', loadChildren: () => import('./about/about.module').then((m) => m.AboutModule) }]),
  Shell.childRoutes([
    {
      path: 'contact',
      loadChildren: () => import('./contact/contact.module').then((m) => m.ContactModule),
    },
  ]),
  Shell.childRoutes([
    {
      path: 'settings',
      loadChildren: () => import('./settings/settings-routing.module').then((m) => m.SettingsRoutingModule),
    },
  ]),
  Shell.childRoutes([
    {
      path: 'businessunit',
      loadChildren: () => import('./business-unit/business-unit.module').then((m) => m.BusinessUnitModule),
    },
  ]),
  Shell.childRoutes([
    {
      path: 'lead',
      loadChildren: () => import('./lead/lead.module').then((m) => m.LeadModule),
    },
  ]),
  Shell.childRoutes([
    {
      path: 'task',
      loadChildren: () => import('./task/task.module').then((m) => m.TaskModule),
    },
  ]),

  Shell.childRoutes([
    {
      path: 'add-user',
      loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
    },
  ]),
  Shell.childRoutes([
    {
      path: 'teams',
      loadChildren: () => import('./teams/teams.module').then((m) => m.TeamsModule),
    },
  ]),
  Shell.childRoutes([
    {
      path: 'account',
      loadChildren: () => import('./account/account.module').then((m) => m.AccountModule),
    },
  ]),
  Shell.childRoutes([
    {
      path: 'add-tag',
      loadChildren: () => import('./tag/tag.module').then((m) => m.TagModule),
    },
  ]),
  Shell.childRoutes([
    {
      path: 'opportunity',
      loadChildren: () => import('src/app/newopportunity/newopportunity.module').then((m) => m.NewOpportunityModule),
    },
  ]),
  Shell.childRoutes([
    {
      path: 'dsr',
      loadChildren: () => import('./DSR/dsr.module').then((m) => m.DSRModule),
    },
  ]),
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
