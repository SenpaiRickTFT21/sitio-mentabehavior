import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticuloService } from '../../services/articulo.service';

@Component({
  selector: 'app-secciones',
  templateUrl: './secciones.component.html',
  styleUrls: ['./secciones.component.css', '../../app.component.css'],
})
export class SeccionesComponent implements OnInit {
  articuloID: string;

  contenidoTDAH = {
    titulo: 'TDAH',
    subtitulo: 'Explorando la mente: enfoques clínicos',
    descripcionTitulo: '"Voces del TDA-H: Compartiendo Experiencias y Apoyo"',
    descripcion:
      'Queremos brindar un espacio seguro y amigable donde las personas afectadas por el TDA-H, ya sean pacientes, familiares o profesionales, puedan compartir sus historias, conocimientos y consejos. Este foro es una oportunidad para',
    headerImg: '"./assets/img/tdah-img-header.png"',
    foroImg: '"./assets/img/tdah-foro-img.jpeg"',
  };

  contenidoPadres = {
    titulo: 'Padres',
    subtitulo: 'Explorando la mente: enfoques clínicos',
    descripcionTitulo: '"Voces del TDA-H: Compartiendo Experiencias y Apoyo"',
    descripcion:
      'Queremos brindar un espacio seguro y amigable donde las personas afectadas por el TDA-H, ya sean pacientes, familiares o profesionales, puedan compartir sus historias, conocimientos y consejos. Este foro es una oportunidad para',
    headerImg: '"./assets/img/padres-secciones.png"',
    foroImg: '"./assets/img/padres-foro-img.webp"',
  };

  contenidoJovenes = {
    titulo: 'Jovenes',
    subtitulo: 'Explorando la mente: enfoques clínicos',
    descripcionTitulo: '"Voces del TDA-H: Compartiendo Experiencias y Apoyo"',
    descripcion:
      'Queremos brindar un espacio seguro y amigable donde las personas afectadas por el TDA-H, ya sean pacientes, familiares o profesionales, puedan compartir sus historias, conocimientos y consejos. Este foro es una oportunidad para',
    headerImg: '"./assets/img/jovenes-img-header.png"',
    foroImg: '"./assets/img/foro-tdah-img.jpeg"',
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.articuloID = params.get('id');
    });
  }
}
