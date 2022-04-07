import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnLeftDirective, ColumnRightDirective, TwoColumnLayoutComponent } from './two-column-layout.component';

@NgModule({
  imports: [CommonModule],
  exports: [TwoColumnLayoutComponent, ColumnLeftDirective, ColumnRightDirective],
  declarations: [TwoColumnLayoutComponent, ColumnLeftDirective, ColumnRightDirective],
})
export class TwoColumnLayoutModule {}
