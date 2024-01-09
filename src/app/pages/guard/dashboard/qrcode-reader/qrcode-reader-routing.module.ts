import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrcodeReaderPage } from './qrcode-reader.page';

const routes: Routes = [
  {
    path: '',
    component: QrcodeReaderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrcodeReaderPageRoutingModule {}
