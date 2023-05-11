import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticuloService } from '../../services/articulo.service';
import { Articulo } from '../../models/articulo';

@Component({
  selector: 'app-secciones',
  templateUrl: './secciones.component.html',
  styleUrls: ['./secciones.component.css'],
})
export class SeccionesComponent implements OnInit {
  id: string;
  articulosTDAH: Articulo[] = [];
  articuloID: string;

  isCollapsed: { [key: string]: boolean } = {};

  contenidoTDAH = {
    titulo: 'TDAH',
    subtitulo: 'Explorando la mente: enfoques clínicos',
    descripcionTitulo: '"Voces del TDA-H: Compartiendo Experiencias y Apoyo"',
    descripcion:
      'Queremos brindar un espacio seguro y amigable donde las personas afectadas por el TDA-H, ya sean pacientes, familiares o profesionales, puedan compartir sus historias, conocimientos y consejos. Este foro es una oportunidad para',
    foroImg: '"../../../assets/img/foro-tdah-img.jpeg"',
  };

  constructor(
    private route: ActivatedRoute,
    private articuloService: ArticuloService,
    private router: Router,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });
    //this.getArticulos();
    this.getArticulosBySeccion();
  }

  async getArticulosBySeccion(): Promise<void> {
    try {
      this.articulosTDAH = await this.articuloService.getArticulosBySeccion(
        'tdah'
      );
      console.log(this.articulosTDAH);
    } catch (error) {
      console.error('Error retrieving articulos: ', error);
    }

    for (const articulo of this.articulosTDAH) {
      for (const tag of articulo.tags) {
        this.isCollapsed[tag] = true;
      }
    }
    console.log(this.isCollapsed);
  }

  /*async getArticulos(): Promise<void> {
    const articulos = await this.articuloService.getArticulos();
    console.log(articulos);
    const seccion = 'tdah';
    this.articulosTDAH = await this.articuloService.getArticulosBySeccion(
      seccion
    );
    //this.articulosTDAH = articulos.filter(
    //   (articulo) => articulo.seccion === 'tdah'
    //);
    console.log(this.articulosTDAH);

    for (const articulo of this.articulosTDAH) {
      for (const tag of articulo.tags) {
        this.isCollapsed[tag] = true;
      }
    }
    console.log(this.isCollapsed);
  }*/

  getUniqueTags(): string[] {
    const uniqueTags = new Set<string>();
    for (const articulo of this.articulosTDAH) {
      for (const tag of articulo.tags) {
        uniqueTags.add(tag);
      }
    }
    return Array.from(uniqueTags);
  }

  getArticulosByTag(tag: string): Articulo[] {
    return this.articulosTDAH.filter((articulo) => articulo.tags.includes(tag));
  }

  toggleCollapse(tag: string): void {
    this.isCollapsed[tag] = !this.isCollapsed[tag];
  }
  navigateToArticle(id: string) {
    //console.log('Selected article:', article);
    this.router.navigate(['/articulo', id]);
    this.renderer.setProperty(window, 'scrollTo', 0);
  }
}
