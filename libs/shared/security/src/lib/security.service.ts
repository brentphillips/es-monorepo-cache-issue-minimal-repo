import { Injectable } from '@angular/core';
import { MsalService, MsalBroadcastService } from '@azure/msal-angular';
import { InteractionStatus, EventMessage, EventType, AccountInfo } from '@azure/msal-browser';
import { BehaviorSubject, filter } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SecurityService {
  account$ = new BehaviorSubject<AccountInfo | null>(null);
  loggedIn$ = new BehaviorSubject(false);

  constructor(private authService: MsalService, private msalBroadcastService: MsalBroadcastService) {}

  init(): void {
    this.authService.instance.enableAccountStorageEvents();

    this.msalBroadcastService.msalSubject$
      .pipe(
        filter(
          (msg: EventMessage) =>
            msg.eventType === EventType.ACCOUNT_ADDED || msg.eventType === EventType.ACCOUNT_REMOVED
        )
      )
      .subscribe((result: EventMessage) => {
        if (this.authService.instance.getAllAccounts().length === 0) {
          window.location.pathname = '/';
        } else {
          this.setLoginDisplay();
        }
      });

    this.msalBroadcastService.inProgress$
      .pipe(filter((status: InteractionStatus) => status === InteractionStatus.None))
      .subscribe(() => {
        this.setLoginDisplay();
        this.checkAndSetActiveAccount();
      });
  }

  setLoginDisplay() {
    this.loggedIn$.next(this.authService.instance.getAllAccounts().length > 0);

    const activeAccount = this.authService.instance.getActiveAccount();

    if (activeAccount) {
      this.account$.next(activeAccount);
    }
  }

  checkAndSetActiveAccount() {
    /**
     * If no active account set but there are accounts signed in, sets first account to active account
     * To use active account set here, subscribe to inProgress$ first in your component
     * Note: Basic usage demonstrated. Your app may require more complicated account selection logic
     */
    const activeAccount = this.authService.instance.getActiveAccount();

    if (!activeAccount && this.authService.instance.getAllAccounts().length > 0) {
      const accounts = this.authService.instance.getAllAccounts();
      this.authService.instance.setActiveAccount(accounts[0]);
    }

    this.account$.next(this.authService.instance.getActiveAccount());
  }

  logout(): void {
    this.authService.logout();
  }
}
