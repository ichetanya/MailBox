import { Component, OnInit } from '@angular/core';
import { EmailService } from '../../services/email.service';
import { ActivatedRoute } from '@angular/router';
import { EmailData } from '../../models/email-data';
import { ScreenSizeService } from '../../services/screen-size.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-email-preview',
  templateUrl: './email-preview.component.html',
  styleUrls: ['./email-preview.component.scss']
})
export class EmailPreviewComponent implements OnInit {
  data: EmailData;
  showBackIcon: boolean;
  constructor(
    private emailService: EmailService,
    private route: ActivatedRoute,
    private screenService: ScreenSizeService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id') ?? '';
      if (id) {
        this.getEmailData(id);
      }
    });
    this.screenService.size.subscribe({
      next: (size) => {
        if (size.width < 860) {
          this.showBackIcon = true;
        } else {
          this.showBackIcon = false;
        }
      }
    })
  }

  getEmailData(id: string): void {
    this.data = this.emailService.getEmailById(id);
  }

  goBack(): void {
    this.location.back()
  }
}

