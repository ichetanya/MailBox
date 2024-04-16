import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EmailData } from 'mailbox-common';

@Component({
  selector: 'app-email-list-box',
  templateUrl: './email-list-box.component.html',
  styleUrls: ['./email-list-box.component.scss']
})
export class EmailListBoxComponent {
  @Input() emails: EmailData[] = [];
  @Output() showEmail: EventEmitter<EmailData> = new EventEmitter();
  activeEmailId: string;

  /**
   * Emits showEmail when user clicks on any email card.
   * 
   * @param data Selected Email Data
   */
  emitEvent(data: EmailData): void {
    this.activeEmailId = data.id!;
    this.showEmail.emit(data);
  }
}
