import { Injectable } from '@angular/core';
import { UserInfo } from '../models/user-info';
import { EmailData } from '../models/email-data';
import { mockedEmails } from '../mocked-data/mocked-emails';

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
