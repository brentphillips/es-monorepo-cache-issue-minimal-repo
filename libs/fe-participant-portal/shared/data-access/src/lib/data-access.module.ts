import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppStateService } from './app-state/app-state.service';

@NgModule({
  imports: [CommonModule],
  providers: [AppStateService],
})
export class SharedDataAccessModule {}
