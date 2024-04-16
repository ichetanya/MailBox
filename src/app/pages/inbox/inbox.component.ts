import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmailData } from 'mailbox-common';
import { Subject, takeUntil } from 'rxjs';
import { RouterConfiguration } from 'src/app/configurations/router-config';
import { EmailService } from 'src/app/shared/services/email.service';
import { ScreenSizeService } from 'src/app/shared/services/screen-size.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit, OnDestroy {
  emails: EmailData[] = [];
  currentDeviceWith: number;
  private destroy = new Subject<void>();
  constructor(private emailService: EmailService,
    private router: Router,
    private route: ActivatedRoute,
    private screenService: ScreenSizeService
  ) {
  }

  /**
   * Fetches list of Emails.
   * 
   * Also, checks the screen size.
   */
  ngOnInit(): void {
    this.emails = this.emailService.getEmails();
    this.screenService.size.pipe(
      takeUntil(this.destroy)
    ).subscribe(size => {
      this.currentDeviceWith = size.width;
    });
  }

  /**
   * Redirects to the email details page if user's screen is less than 860 pixels.
   * 
   * If the user's screen is more than 860 pixel than emails detail is shown on the child route.
   * 
   * @param email Email Data
   */
  showEmail(email: EmailData): void {
    if (this.currentDeviceWith <= 860) {
      this.router.navigate([RouterConfiguration.details, email.id]);
    } else {
      this.router.navigate([RouterConfiguration.details, email.id], { relativeTo: this.route });
    }
  }

  /**
   * Unsubscribes from the creenService.size Observable. 
   */
  ngOnDestroy() {
    this.destroy.next();
    this.destroy.complete();
  }
}
