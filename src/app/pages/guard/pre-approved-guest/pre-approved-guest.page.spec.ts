import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PreApprovedGuestPage } from './pre-approved-guest.page';

describe('PreApprovedGuestPage', () => {
  let component: PreApprovedGuestPage;
  let fixture: ComponentFixture<PreApprovedGuestPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PreApprovedGuestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
