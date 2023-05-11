import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { User } from 'firebase/auth';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css'],
})
export class TopNavComponent implements OnInit {
  loggedIn = false;
  userEmail: string | undefined;
  isCollapsed: boolean = true;
  currentRoute: string | null = null;
  isCollapsed1 = true;

  constructor(
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentRoute = event.urlAfterRedirects;
        console.log(this.currentRoute);
      });

    this.userService.auth.onAuthStateChanged((user: User | null) => {
      if (user) {
        this.loggedIn = true;
        this.userEmail = user.email;
      } else {
        this.loggedIn = false;
        this.userEmail = undefined;
      }
    });
  }

  async logout() {
    await this.userService.auth.signOut();
    this.router.navigate(['/']);
  }
}
