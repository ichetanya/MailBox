import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InboxComponent } from './pages/inbox/inbox.component';
import { FlaggedComponent } from './pages/flagged/flagged.component';
import { RouterConfiguration } from './configurations/router-config';
import { DraftComponent } from './pages/draft/draft.component';
import { SentComponent } from './pages/sent/sent.component';
import { TrashComponent } from './pages/trash/trash.component';
import { EmailPreviewComponent } from './shared/components/email-preview/email-preview.component';
import { EmptyPreviewComponent } from './shared/components/empty-preview/empty-preview.component';
import { FolderComponent } from './pages/folder/folder.component';

const emailChildRoutes: Routes = [
  {
    path: '',
    redirectTo: RouterConfiguration.empty,
    pathMatch: 'full'
  },
  {
    path: RouterConfiguration.empty,
    component: EmptyPreviewComponent
  },
  {
    path: `${RouterConfiguration.details}/:id`,
    component: EmailPreviewComponent
  }
];

const routes: Routes = [
  { path: '', redirectTo: RouterConfiguration.inbox, pathMatch: 'full' },
  { path: RouterConfiguration.inbox, component: InboxComponent, children: emailChildRoutes },
  { path: RouterConfiguration.flagged, component: FlaggedComponent, children: emailChildRoutes },
  { path: RouterConfiguration.draft, component: DraftComponent, children: emailChildRoutes },
  { path: RouterConfiguration.sent, component: SentComponent, children: emailChildRoutes },
  { path: RouterConfiguration.trash, component: TrashComponent, children: emailChildRoutes },
  { path: RouterConfiguration.empty, component: EmptyPreviewComponent },
  { path: `${RouterConfiguration.folder}/:folderName`, component: FolderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
