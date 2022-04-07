import { Component, ChangeDetectionStrategy, Directive, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'es-two-column-layout',
  templateUrl: './two-column-layout.component.html',
  styleUrls: ['./two-column-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class TwoColumnLayoutComponent {}

@Directive({
  selector: 'es-column-left, div[es-column-left]',
})
export class ColumnLeftDirective {}

@Directive({
  selector: 'es-column-right, div[es-column-right]',
})
export class ColumnRightDirective {}
