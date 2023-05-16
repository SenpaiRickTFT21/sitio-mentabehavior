import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { User } from 'firebase/auth';
import { UserService } from './services/user.service';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'angular-project';
  appCurrentRoute: string = '';
  isLoggedIn: boolean | undefined = undefined;
  userEmail: string | undefined;

  constructor(public router: Router, private userService: UserService) {}
  ngOnInit(): void {
    AOS.init();

    this.userService.auth.onAuthStateChanged((user: User | null) => {
      if (user) {
        this.isLoggedIn = true;
        this.userEmail = user.email;
      } else {
        this.isLoggedIn = false;
        this.userEmail = undefined;
      }
    });

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.appCurrentRoute = event.urlAfterRedirects || '/';
      });
  }
}
