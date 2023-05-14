import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { User } from 'firebase/auth';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css'],
})
export class TopNavComponent implements OnInit {
  loggedIn = false;
  userEmail: string | undefined;
  isCollapsed: boolean = true;
  @Input() currentRoute: string;
  isCollapsedProfile = true;

  constructor(private userService: UserService, private router: Router) {
    this.currentRoute = '/';
  }

  ngOnInit(): void {
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
    this.isCollapsedProfile = true;
    this.router.navigate(['/']);
  }
}
