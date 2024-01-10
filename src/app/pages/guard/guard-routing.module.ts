import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardPageModule)
  },
  {
    path: 'resident',
    loadChildren: () => import('./resident/resident.module').then(m => m.ResidentPageModule)
  },
  {
    path: 'call-resident',
    loadChildren: () => import('./call-resident/call-resident.module').then(m => m.CallResidentPageModule)
  },
  {
    path: 'verified-by-guard',
    loadChildren: () => import('./verified-by-guard/verified-by-guard.module').then(m => m.VerifiedByGuardPageModule)
  },
  {
    path: 'pre-approved-guest',
    loadChildren: () => import('./pre-approved-guest/pre-approved-guest.module').then(m => m.PreApprovedGuestPageModule)
  },
  {
    path: 'scan-result/:choice',
    loadChildren: () => import('./scan-result/scan-result.module').then(m => m.ScanResultPageModule)
  },
  {
    path: 'qrcode-reader',
    loadChildren: () => import('./qrcode-reader/qrcode-reader.module').then(m => m.QrcodeReaderPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class GuardRoutingModule { }
