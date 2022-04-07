import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityService } from './security.service';
import { MsalModule } from '@azure/msal-angular';

@NgModule({
  imports: [CommonModule, MsalModule],
  providers: [SecurityService],
})
export class SecurityModule {}
