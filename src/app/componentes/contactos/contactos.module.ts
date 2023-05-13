import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MapaComponent } from './mapa/mapa.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [MapaComponent, CardComponent],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [MapaComponent, CardComponent],
})
export class ContactosModule {}
