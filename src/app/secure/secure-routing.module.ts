import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecureContentComponent } from './secure-content/secure-content.component';
import { ConfirmGuard } from './confirm.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [ConfirmGuard],
    component: SecureContentComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecureRoutingModule {}

