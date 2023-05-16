import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactosComponent } from './contactos.component';
import { MapaComponent } from './mapa/mapa.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [MapaComponent, CardComponent, ContactosComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'contactos',
        component: ContactosComponent,
      },
    ]),
  ],
  exports: [RouterModule],
})
export class ContactosModule {}
