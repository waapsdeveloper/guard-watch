import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArcheivePage } from './archeive.page';

describe('ArcheivePage', () => {
  let component: ArcheivePage;
  let fixture: ComponentFixture<ArcheivePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ArcheivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
