import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InviteDetailOwnerPage } from './invite-detail-owner.page';

describe('InviteDetailOwnerPage', () => {
  let component: InviteDetailOwnerPage;
  let fixture: ComponentFixture<InviteDetailOwnerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InviteDetailOwnerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
