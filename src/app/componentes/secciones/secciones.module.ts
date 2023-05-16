import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeccionesComponent } from './secciones.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { SeccionComponent } from './seccion/seccion.component';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: '',
    component: SeccionesComponent,
  },
];

@NgModule({
  declarations: [SeccionesComponent, SeccionComponent],
  imports: [CommonModule, NgbCollapseModule, RouterModule.forChild(routes)],
  exports: [SeccionesComponent],
})
export class SeccionesModule {}
