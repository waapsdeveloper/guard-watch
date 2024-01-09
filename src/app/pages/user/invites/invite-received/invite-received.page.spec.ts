import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InviteReceivedPage } from './invite-received.page';

describe('InviteReceivedPage', () => {
  let component: InviteReceivedPage;
  let fixture: ComponentFixture<InviteReceivedPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InviteReceivedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
