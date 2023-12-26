import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InviteDetailPage } from './invite-detail.page';

describe('InviteDetailPage', () => {
  let component: InviteDetailPage;
  let fixture: ComponentFixture<InviteDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InviteDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
