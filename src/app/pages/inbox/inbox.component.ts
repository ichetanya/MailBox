import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterConfiguration } from 'src/app/configurations/router-config';
import { EmailData } from 'src/app/shared/models/email-data';
import { EmailService } from 'src/app/shared/services/email.service';
import { ScreenSizeService } from 'src/app/shared/services/screen-size.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {
  emails: EmailData[] = [];
  currentDeviceWith: number;
  constructor(private emailService: EmailService,
    private router: Router,
    private route: ActivatedRoute,
    private screenService: ScreenSizeService
  ) {
  }
  ngOnInit(): void {
    this.emails = this.emailService.getEmails();
    this.screenService.size.subscribe(size => {
      this.currentDeviceWith = size.width;
      console.log(this.currentDeviceWith);

    })
  }

  showEmail(email: EmailData): void {
    console.log(email);
    if (this.currentDeviceWith > 860) {
      this.router.navigate([RouterConfiguration.details, email.id], { relativeTo: this.route });
    } {
      this.router.navigate([RouterConfiguration.details, email.id]);
    }
  }
}
