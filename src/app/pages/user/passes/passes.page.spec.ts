import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PassesPage } from './passes.page';

describe('PassesPage', () => {
  let component: PassesPage;
  let fixture: ComponentFixture<PassesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PassesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
