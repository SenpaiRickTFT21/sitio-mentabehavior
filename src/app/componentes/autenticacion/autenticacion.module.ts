import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { RegistrarUserComponent } from './registrar-user/registrar-user.component';
import { LoginComponent } from './login/login.component';

const routes = [
  { path: 'signup', component: RegistrarUserComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  declarations: [RegistrarUserComponent, LoginComponent],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
})
export class AutenticacionModule {}
