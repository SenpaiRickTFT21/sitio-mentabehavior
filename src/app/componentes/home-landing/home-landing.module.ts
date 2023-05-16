import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLandingComponent } from './home-landing.component';
import { SupportingSectionComponent } from './supporting-section/supporting-section.component';
import { DestacadosComponent } from './destacados/destacados.component';
import { BillboardComponent } from './billboard/billboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    HomeLandingComponent,
    SupportingSectionComponent,
    DestacadosComponent,
    BillboardComponent,
  ],
  imports: [CommonModule, NgbModule],
  exports: [HomeLandingComponent],
})
export class HomeLandingModule {}
