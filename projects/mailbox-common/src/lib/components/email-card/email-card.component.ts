import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EmailData } from '../../models/email-data';

@Component({
  selector: 'app-email-card',
  templateUrl: './email-card.component.html',
  styleUrls: ['./email-card.component.scss']
})
export class EmailCardComponent {

  @Input()
  data: EmailData;

  @Input()
  activeEmailId: string;

  @Output()
  showEmail: EventEmitter<EmailData> = new EventEmitter();


  /**
   * Emits event when user clicks on the card.
   */
  onClick(): void {
    this.showEmail.emit(this.data);
  }

}
