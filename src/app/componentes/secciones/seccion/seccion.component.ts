import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { Articulo } from 'src/app/models/articulo';
import { ArticuloService } from '../../../services/articulo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seccion',
  templateUrl: './seccion.component.html',
  styleUrls: ['./seccion.component.css', '../secciones.component.css'],
})
export class SeccionComponent implements OnInit {
  @Input() contenido: any;
  @Input() articuloID: string;
  @Input() articulos: any;
  isCollapsed: { [key: string]: boolean } = {};

  constructor(
    private router: Router,
    private renderer: Renderer2,
    private articuloService: ArticuloService
  ) {}

  ngOnInit(): void {
    this.getArticulosBySeccion();
  }

  async getArticulosBySeccion(): Promise<void> {
    try {
      this.articulos = await this.articuloService.getArticulosBySeccion(
        this.articuloID
      );
      console.log(this.articulos);
    } catch (error) {
      console.error('Error retrieving articulos: ', error);
    }

    for (const articulo of this.articulos) {
      for (const tag of articulo.tags) {
        this.isCollapsed[tag] = true;
      }
    }
    console.log(this.isCollapsed);
  }

  getUniqueTags(): string[] {
    const uniqueTags = new Set<string>();
    for (const articulo of this.articulos) {
      for (const tag of articulo.tags) {
        uniqueTags.add(tag);
      }
    }
    return Array.from(uniqueTags);
  }

  getArticulosByTag(tag: string): Articulo[] {
    return this.articulos.filter((articulo) => articulo.tags.includes(tag));
  }

  toggleCollapse(tag: string): void {
    this.isCollapsed[tag] = !this.isCollapsed[tag];
  }
  navigateToArticle(id: string) {
    //console.log('Selected article:', article);
    this.renderer.setProperty(window, 'scrollTo', 0);
    this.router.navigate(['/articulo', id]);
  }
}
