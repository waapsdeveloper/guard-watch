import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QrcodeReaderPage } from './qrcode-reader.page';

describe('QrcodeReaderPage', () => {
  let component: QrcodeReaderPage;
  let fixture: ComponentFixture<QrcodeReaderPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(QrcodeReaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
