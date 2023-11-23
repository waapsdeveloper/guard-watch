import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RequestPassPage } from './request-pass.page';

describe('RequestPassPage', () => {
  let component: RequestPassPage;
  let fixture: ComponentFixture<RequestPassPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RequestPassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
