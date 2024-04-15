import { Component } from '@angular/core';

@Component({
  selector: 'app-email-preview',
  templateUrl: './email-preview.component.html',
  styleUrls: ['./email-preview.component.scss']
})
export class EmailPreviewComponent {
  currentCount = 0;
  totalCount = 180;
  data = {
    id: uuid(),
    sender: {
      firstName: "John",
      lastName: "Doe",
      emailAddress: "john.doe@example.com",
      image: "mike.png"
    },
    subject: "Meeting Reminder",
    body: "Just a reminder that our meeting is scheduled for tomorrow at 10:00 AM.",
    date: "2024-04-15",
    time: "09:00 AM",
    attachments: ["agenda.pdf"]
  };
}
function uuid() {
  return ''
}

