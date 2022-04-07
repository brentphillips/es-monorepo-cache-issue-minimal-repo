import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppShellComponent } from './app-shell.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AppShellComponent,
        
      },
    ]),
  ],
  declarations: [AppShellComponent],
})
export class AppShellModule {}
