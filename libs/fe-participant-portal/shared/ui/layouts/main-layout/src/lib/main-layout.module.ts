import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from './main-layout.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [MainLayoutComponent],
  declarations: [MainLayoutComponent],
})
export class MainLayoutModule {}
