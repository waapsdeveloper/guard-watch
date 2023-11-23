import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerifiedByGuardPage } from './verified-by-guard.page';

describe('VerifiedByGuardPage', () => {
  let component: VerifiedByGuardPage;
  let fixture: ComponentFixture<VerifiedByGuardPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VerifiedByGuardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
