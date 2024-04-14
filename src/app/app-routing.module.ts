import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InboxComponent } from './pages/inbox/inbox.component';
import { FlaggedComponent } from './pages/flagged/flagged.component';
import { RouterConfiguration } from './configurations/router-config';
import { DraftComponent } from './pages/draft/draft.component';
import { SentComponent } from './pages/sent/sent.component';
import { TrashComponent } from './pages/trash/trash.component';

const routes: Routes = [
  { path: '', redirectTo: RouterConfiguration.inbox, pathMatch: 'full' },
  { path: RouterConfiguration.inbox, component: InboxComponent },
  { path: RouterConfiguration.flagged, component: FlaggedComponent },
  { path: RouterConfiguration.draft, component: DraftComponent },
  { path: RouterConfiguration.sent, component: SentComponent },
  { path: RouterConfiguration.trash, component: TrashComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
