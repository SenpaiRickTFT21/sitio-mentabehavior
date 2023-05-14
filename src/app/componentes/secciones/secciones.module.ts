import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeccionesComponent } from './secciones.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { SeccionComponent } from './seccion/seccion.component';

@NgModule({
  declarations: [SeccionesComponent, SeccionComponent],
  imports: [CommonModule, NgbCollapseModule],
  exports: [SeccionesComponent],
})
export class SeccionesModule {}
