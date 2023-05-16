import { Component, Input, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { ArticuloService } from '../../../services/articulo.service';
import { Articulo } from '../../../models/articulo';

@Component({
  selector: 'app-supporting-section',
  templateUrl: './supporting-section.component.html',
  styleUrls: [
    './supporting-section.component.scss',
    '../home-landing.component.css',
  ],
})
export class SupportingSectionComponent implements OnInit {
  articuloId = '9xFDgB0jsaDRoPz6qHSj';
  articuloPrincipal: Articulo;

  constructor(
    private router: Router,
    private renderer: Renderer2,
    private articuloService: ArticuloService
  ) {}

  async ngOnInit(): Promise<void> {
    const art = await this.articuloService.getArticulo(this.articuloId);
    if (art) {
      this.articuloPrincipal = art;
    }
    if (!this.articuloPrincipal) {
      console.error('Articulo not found');
    }
  }

  navigateToArticle(article) {
    this.renderer.setProperty(window, 'scrollTo', 0);
    this.router.navigate(['/articulo', this.articuloId]);
  }
}
