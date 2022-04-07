import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  HostListener,
  ElementRef,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';
import { ThrottlingUtils } from '@azure/msal-common';

@Component({
  selector: 'es-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent {
  menuOpen = false;
  menuOpened = false;
  menuItems = [
    { name: 'Home', icon: 'home', routerLink: '/' },
    { name: 'Award', icon: 'info', routerLink: '/award' },
    { name: 'Groups', icon: 'user', routerLink: '/groups' },
  ];

  @Input() award = 0;
  @Input() impactPoints = 0;
  @Input() username = '';
  @Input() fullName = '';

  @Output() logoutEvent = new EventEmitter<null>();

  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    // if (!this.eRef.nativeElement.contains(event.target)) {
    //   if (this.menuOpen) {
    //   }
    // }
    if (this.menuOpen && this.menuOpened) {
      this.menuOpen = false;
      this.menuOpened = false;
    } else if (this.menuOpen && !this.menuOpened) {
      this.menuOpened = true;
    }
  }

  constructor(private eRef: ElementRef) {}

  toggleMenu(): void {
    if (this.menuOpen) {
      this.menuOpened = false;
    }
    this.menuOpen = !this.menuOpen;
  }

  logout() {
    this.logoutEvent.emit(null);
  }
}
