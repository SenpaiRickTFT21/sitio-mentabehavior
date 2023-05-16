import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ArticuloComponent } from './articulo.component';
import { ArticuloContentComponent } from './articulo-content/articulo-content.component';
import { SafeHtmlPipe } from './safe-html.pipe';

const routes = [
  {
    path: '',
    component: ArticuloComponent,
  },
];

@NgModule({
  declarations: [ArticuloComponent, ArticuloContentComponent, SafeHtmlPipe],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [],
  exports: [ArticuloComponent],
})
export class ArticuloModule {}
