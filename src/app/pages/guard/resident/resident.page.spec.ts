import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResidentPage } from './resident.page';

describe('ResidentPage', () => {
  let component: ResidentPage;
  let fixture: ComponentFixture<ResidentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ResidentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
