import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailListBoxComponent } from './email-list-box.component';

describe('EmailListBoxComponent', () => {
  let component: EmailListBoxComponent;
  let fixture: ComponentFixture<EmailListBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailListBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailListBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
