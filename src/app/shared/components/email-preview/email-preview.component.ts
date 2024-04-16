import { Component, OnInit } from '@angular/core';
import { EmailService } from '../../services/email.service';
import { ActivatedRoute } from '@angular/router';
import { ScreenSizeService } from '../../services/screen-size.service';
import { Location } from '@angular/common';
import { EmailData } from 'mailbox-common';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-email-preview',
  templateUrl: './email-preview.component.html',
  styleUrls: ['./email-preview.component.scss']
})
export class EmailPreviewComponent implements OnInit {
  data: EmailData;
  showBackIcon: boolean;
  private destroy = new Subject<void>();
  constructor(
    private emailService: EmailService,
    private route: ActivatedRoute,
    private screenService: ScreenSizeService,
    private location: Location
  ) { }

  /**
   * Gets the id of the email from the route.
   * 
   * Also, checks the screen size.
   */
  ngOnInit(): void {
    this.route.paramMap.pipe(takeUntil(this.destroy)).subscribe(params => {
      const id = params.get('id') ?? '';
      if (id) {
        this.getEmailData(id);
      }
    });
    this.screenService.size.pipe(takeUntil(this.destroy)).subscribe({
      next: (size) => {
        if (size.width < 860) {
          this.showBackIcon = true;
        } else {
          this.showBackIcon = false;
        }
      }
    })
  }

  /**
   * Fetches Email data.
   * 
   * @param id Email id
   */
  getEmailData(id: string): void {
    this.data = this.emailService.getEmailById(id);
  }

  /**
   * Redirects to the previous page.
   */
  goBack(): void {
    this.location.back()
  }


  /**
   * Unsubscribes from the creenService.size Observable. 
   */
  ngOnDestroy() {
    this.destroy.next();
    this.destroy.complete();
  }
}

