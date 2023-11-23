import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CallResidentPage } from './call-resident.page';

describe('CallResidentPage', () => {
  let component: CallResidentPage;
  let fixture: ComponentFixture<CallResidentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CallResidentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
