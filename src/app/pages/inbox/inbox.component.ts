import { Component, OnInit } from '@angular/core';
import { EmailData } from 'src/app/shared/models/email-data';
import { EmailService } from 'src/app/shared/services/email.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit{
  emails: EmailData[] = [];
  constructor(private emailService: EmailService) {
  }
  ngOnInit(): void {
    this.emails = this.emailService.getEmails();
  }

  showEmail(email: EmailData): void {
    console.log(email);
    
  }
}
