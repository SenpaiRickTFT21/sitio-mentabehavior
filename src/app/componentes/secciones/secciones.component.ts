import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticuloService } from '../../services/articulo.service';
import { Articulo } from '../../models/articulo';

@Component({
  selector: 'app-secciones',
  templateUrl: './secciones.component.html',
  styleUrls: ['./secciones.component.css'],
})
export class SeccionesComponent implements OnInit {
  id: string;
  isCollapsed1 = true;
  isCollapsed2 = true;
  articulos: Articulo[] = [];

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
    private articuloService: ArticuloService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });
    this.getArticulos();
  }
  async getArticulos(): Promise<void> {
    this.articulos = await this.articuloService.getArticulos();
    console.log(this.articulos);
  }
}
