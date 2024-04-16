import { Injectable } from '@angular/core';
import { mockedEmails } from '../mocked-data/mocked-emails';
import { EmailData } from 'mailbox-common';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }

  getEmails(): EmailData[] {
    return mockedEmails;
  }

  getEmailById(id: string): EmailData {
    return mockedEmails.find((email) => email.id === id) as EmailData;
  }
}
