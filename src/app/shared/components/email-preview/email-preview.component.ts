import { Component, OnInit } from '@angular/core';
import { EmailService } from '../../services/email.service';
import { ActivatedRoute } from '@angular/router';
import { EmailData } from '../../models/email-data';

@Component({
  selector: 'app-email-preview',
  templateUrl: './email-preview.component.html',
  styleUrls: ['./email-preview.component.scss']
})
export class EmailPreviewComponent implements OnInit {
  currentCount = 0;
  totalCount = 180;
  data: EmailData;

  constructor(private emailService: EmailService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id') ?? '';
      if (id) {
        this.getEmailData(id);
      }
    });
  }

  getEmailData(id: string) {
    this.data = this.emailService.getEmailById(id);
  }
}

