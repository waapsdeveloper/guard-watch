import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PublicSpaceByIdPage } from './public-space-by-id.page';

describe('PublicSpaceByIdPage', () => {
  let component: PublicSpaceByIdPage;
  let fixture: ComponentFixture<PublicSpaceByIdPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PublicSpaceByIdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
