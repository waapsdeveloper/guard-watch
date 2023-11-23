import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PassDetailPage } from './pass-detail.page';

describe('PassDetailPage', () => {
  let component: PassDetailPage;
  let fixture: ComponentFixture<PassDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PassDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
