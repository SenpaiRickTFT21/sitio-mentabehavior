import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TestModalComponent } from '../testmodal/testmodal.component';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: [
    './top-nav.component.css',
    '../home-landing/billboard/billboard.component.css',
  ],
})
export class TopNavComponent implements OnInit {
  @Input() loggedIn: boolean | undefined = undefined;
  @Input() userEmail: string | undefined;
  isCollapsed: boolean = true;
  @Input() currentRoute: string | undefined;
  isCollapsedProfile = true;
  closeResult: string;

  // En tu componente
  navItems = [
    { route: 'secciones/tdah', name: 'TDAH' },
    { route: 'secciones/jovenes', name: 'Jóvenes' },
    { route: 'secciones/padres', name: 'Padres' },
    { route: 'contactos', name: 'Contactos' },
  ];

  constructor(
    private userService: UserService,
    private router: Router,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {}

  open() {
    const modalRef = this.modalService.open(TestModalComponent);
    modalRef.componentInstance.id = 'myId'; // You can pass data to your modal component here
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

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
