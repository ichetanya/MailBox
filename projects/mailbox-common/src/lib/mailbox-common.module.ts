import { NgModule } from '@angular/core';
import { AssetUrlPipe } from './pipes/asset-url.pipe';
import { DayPipe } from './pipes/day.pipe';
import { EmailCardComponent } from './components/email-card/email-card.component';
import { CommonModule } from '@angular/common';


const libComponents = [
  AssetUrlPipe,
  DayPipe,
  EmailCardComponent
];
@NgModule({
  declarations: [
    ...libComponents
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...libComponents
  ]
})
export class MailboxCommonModule { }
