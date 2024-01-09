import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InviteReceivedBarcodeComponent } from './invite-received-barcode.component';

describe('InviteReceivedBarcodeComponent', () => {
  let component: InviteReceivedBarcodeComponent;
  let fixture: ComponentFixture<InviteReceivedBarcodeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InviteReceivedBarcodeComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InviteReceivedBarcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
