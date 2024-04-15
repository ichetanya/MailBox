import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterConfiguration } from 'src/app/configurations/router-config';
import { EmailData } from 'src/app/shared/models/email-data';
import { EmailService } from 'src/app/shared/services/email.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {
  emails: EmailData[] = [];
  constructor(private emailService: EmailService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }
  ngOnInit(): void {
    this.emails = this.emailService.getEmails();
  }

  showEmail(email: EmailData): void {
    console.log(email);
    this.router.navigate([RouterConfiguration.details, email.id], { relativeTo: this.route });
  }
}
