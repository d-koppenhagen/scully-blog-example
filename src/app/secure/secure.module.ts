import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecureContentComponent } from './secure-content/secure-content.component';
import { SecureRoutingModule } from './secure-routing.module';

@NgModule({
  declarations: [SecureContentComponent],
  imports: [
    CommonModule,
    SecureRoutingModule
  ]
})
export class SecureModule { }
