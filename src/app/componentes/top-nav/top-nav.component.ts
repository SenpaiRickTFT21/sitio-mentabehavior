import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { User } from 'firebase/auth';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: [
    './top-nav.component.css',
    '../home-landing/billboard/billboard.component.css',
  ],
})
export class TopNavComponent implements OnInit {
  loggedIn: boolean | undefined = undefined;
  userEmail: string | undefined;
  isCollapsed: boolean = true;
  @Input() currentRoute: string | undefined;
  isCollapsedProfile = true;
  closeResult: string;

  constructor(
    private userService: UserService,
    private router: Router,
    private modalService: NgbModal
  ) {}

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

  open(content: any) {
    this.modalService.open(content);
  }

  navigateToTest(id: string) {
    this.modalService.dismissAll(); // Close the modal
    this.router.navigate(['/tests', id]);
  }

  async logout() {
    await this.userService.auth.signOut();
    this.isCollapsedProfile = true;
    this.router.navigate(['/']);
  }

  fondoTransparente(): boolean {
    return (
      this.currentRoute.includes('articulo/') ||
      this.currentRoute.includes('login') ||
      this.currentRoute === '/'
    );
  }
}
