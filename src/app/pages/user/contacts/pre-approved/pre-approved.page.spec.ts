import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PreApprovedPage } from './pre-approved.page';

describe('PreApprovedPage', () => {
  let component: PreApprovedPage;
  let fixture: ComponentFixture<PreApprovedPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PreApprovedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
