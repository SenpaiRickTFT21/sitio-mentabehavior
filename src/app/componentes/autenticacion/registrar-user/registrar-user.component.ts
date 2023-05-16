import { Component, OnInit, Renderer2 } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registrar-user',
  templateUrl: './registrar-user.component.html',
  styleUrls: ['./registrar-user.component.css', '../../../app.component.css'],
})
export class RegistrarUserComponent implements OnInit {
  email: string;
  password: string;
  errorMessage: string;
  logged = false;
  returnUrl: string;

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
  }

  register() {
    this.userService
      .registrarUser({ email: this.email, password: this.password })
      .then((response) => {
        this.errorMessage = null;
        this.logged = true;
        setTimeout(() => {
          this.renderer.setProperty(window, 'scrollTo', 0);
          this.router.navigateByUrl(this.returnUrl);
        }, 3000);
      })
      .catch((error) => {
        this.errorMessage = error.message;
        console.error(error);
      });
  }

  registerGoogle() {
    this.userService
      .loginconGoogle()
      .then((response) => {
        this.errorMessage = null;
        this.logged = true;
        setTimeout(() => {
          this.renderer.setProperty(window, 'scrollTo', 0);
          this.router.navigateByUrl(this.returnUrl);
        }, 500);
      })
      .catch((error) => {
        this.errorMessage = error.message;
        console.error(error);
      });
  }
}
