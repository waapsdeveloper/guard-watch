import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreatePassPage } from './create-pass.page';

describe('CreatePassPage', () => {
  let component: CreatePassPage;
  let fixture: ComponentFixture<CreatePassPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreatePassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
