import { Injectable } from '@angular/core';
import { UserInfo } from '../models/user-info';
import { EmailData } from '../models/email-data';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }

  generateUserInfo(): UserInfo {
    return {
      firstName: "John",
      lastName: "Doe",
      emailAddress: "john.doe@example.com",
      image: "sam.png"
    };
  }

  generateMockEmail(): EmailData {
    return {
      sender: this.generateUserInfo(),
      subject: "Mock Email Subject",
      body: "This is a mock email body.",
      date: "2024-04-06",
      time: "10:00 AM",
      attachments: []
    };
  }

  getEmails(): EmailData[] {
    const emails: EmailData[] = [];
    for (let i = 0; i < 7; i++) {
      emails.push(this.generateMockEmail());
    }
    return emails;
  }
}
