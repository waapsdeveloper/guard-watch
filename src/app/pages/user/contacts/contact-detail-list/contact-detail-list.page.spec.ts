import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactDetailListPage } from './contact-detail-list.page';

describe('ContactDetailListPage', () => {
  let component: ContactDetailListPage;
  let fixture: ComponentFixture<ContactDetailListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ContactDetailListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
