import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticuloService } from '../../services/articulo.service';

@Component({
  selector: 'app-secciones',
  templateUrl: './secciones.component.html',
  styleUrls: ['./secciones.component.css'],
})
export class SeccionesComponent implements OnInit {
  articuloID: string;

  contenidoTDAH = {
    titulo: 'TDAH',
    subtitulo: 'Explorando la mente: enfoques clínicos',
    descripcionTitulo: '"Voces del TDA-H: Compartiendo Experiencias y Apoyo"',
    descripcion:
      'Queremos brindar un espacio seguro y amigable donde las personas afectadas por el TDA-H, ya sean pacientes, familiares o profesionales, puedan compartir sus historias, conocimientos y consejos. Este foro es una oportunidad para',
    foroImg: '"./assets/img/foro-tdah-img.jpeg"',
  };

  contenidoPadres = {
    titulo: 'TDAH',
    subtitulo: 'Explorando la mente: enfoques clínicos',
    descripcionTitulo: '"Voces del TDA-H: Compartiendo Experiencias y Apoyo"',
    descripcion:
      'Queremos brindar un espacio seguro y amigable donde las personas afectadas por el TDA-H, ya sean pacientes, familiares o profesionales, puedan compartir sus historias, conocimientos y consejos. Este foro es una oportunidad para',
    foroImg: '"./assets/img/foro-tdah-img.jpeg"',
  };

  constructor(
    private route: ActivatedRoute,
    private articuloService: ArticuloService,
    private router: Router,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.articuloID = params.get('id');
    });
  }
}
