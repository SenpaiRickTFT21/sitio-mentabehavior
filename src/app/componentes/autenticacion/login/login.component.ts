import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  errorMessage: string;
  returnUrl: string;

  loggedIn = false;
  userEmail: string | undefined;

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe((params) => {
      this.returnUrl = params.returnUrl || '/';
    });
  }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    console.log(this.returnUrl);
    this.route.queryParams.subscribe((params) => {
      this.returnUrl = params.returnUrl || '/';
    });
  }

  async login() {
    try {
      const response = await this.userService.login({
        email: this.email,
        password: this.password,
      });
      console.log(response);
      this.router.navigateByUrl(this.returnUrl);
    } catch (error) {
      this.errorMessage = error;
      console.log(this.errorMessage);
    }
  }
  loginGoogle() {
    this.userService
      .loginconGoogle()
      .then((response) => {
        this.errorMessage = null;
        this.router.navigateByUrl(this.returnUrl);
      })
      .catch((error) => {
        this.errorMessage = error.message;
        console.error(error);
      });
  }
}
