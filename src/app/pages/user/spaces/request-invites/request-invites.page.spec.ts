import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RequestInvitesPage } from './request-invites.page';

describe('RequestInvitesPage', () => {
  let component: RequestInvitesPage;
  let fixture: ComponentFixture<RequestInvitesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RequestInvitesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
