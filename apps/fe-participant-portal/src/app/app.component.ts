import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SecurityService } from '@es/shared/security';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map } from 'rxjs';

@Component({
  selector: 'es-root',
  template: `<router-outlet></router-outlet>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  constructor(
    private securityService: SecurityService,
    private httpClient: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          let child = this.activatedRoute.firstChild;
          while (child) {
            if (child.firstChild) {
              child = child.firstChild;
            } else if (child.snapshot.data && child.snapshot.data['title']) {
              return child.snapshot.data['title'];
            } else {
              return null;
            }
          }
          return null;
        })
      )
      .subscribe((data: any) => {
        if (data) {
          this.titleService.setTitle(data + ' - Genus');
        }
      });
  }

  ngOnInit(): void {
    this.securityService.init();
    // this.securityService.loggedIn$.subscribe((x) => console.log(x));
    // this.securityService.account$.subscribe((x) => console.log(x));
    console.log('Welcome to Genus.');
  }
}
