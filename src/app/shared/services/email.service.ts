import { Injectable } from '@angular/core';
import { mockedEmails } from '../mocked-data/mocked-emails';
import { EmailData } from 'mailbox-common';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }

  /**
   * Return Mocked email list
   * 
   * @returns Emails list
   */
  getEmails(): EmailData[] {
    return mockedEmails;
  }

  /**
   * Return Mocked email data
   * 
   * @returns Emails Data
   */
  getEmailById(id: string): EmailData {
    return mockedEmails.find((email) => email.id === id) as EmailData;
  }
}
