import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InviteCreatePage } from './invite-create.page';

describe('InviteCreatePage', () => {
  let component: InviteCreatePage;
  let fixture: ComponentFixture<InviteCreatePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InviteCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
