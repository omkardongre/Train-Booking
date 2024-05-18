import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookTicketModalComponent } from './book-ticket-modal.component';

describe('BookTicketModalComponent', () => {
  let component: BookTicketModalComponent;
  let fixture: ComponentFixture<BookTicketModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookTicketModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookTicketModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
