import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './layout/side-bar/side-bar.component';
import { InboxComponent } from './pages/inbox/inbox.component';
import { FlaggedComponent } from './pages/flagged/flagged.component';
import { TrashComponent } from './pages/trash/trash.component';
import { MainContentComponent } from './layout/main-content/main-content.component';
import { EmailPreviewComponent } from './shared/components/email-preview/email-preview.component';
import { EmptyPreviewComponent } from './shared/components/empty-preview/empty-preview.component';
import { EmailListBoxComponent } from './shared/components/email-list-box/email-list-box.component';
import { FolderComponent } from './pages/folder/folder.component';
import { MailboxCommonModule } from 'mailbox-common';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    InboxComponent,
    FlaggedComponent,
    TrashComponent,
    MainContentComponent,
    EmailPreviewComponent,
    EmptyPreviewComponent,
    EmailListBoxComponent,
    FolderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MailboxCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
