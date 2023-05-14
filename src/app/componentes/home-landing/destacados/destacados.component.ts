import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-destacados',
  templateUrl: './destacados.component.html',
  styleUrls: ['./destacados.component.css', '../home-landing.component.css'],
})
export class DestacadosComponent implements OnInit {
  constructor(private router: Router, private renderer: Renderer2) {}

  ngOnInit(): void {}

  navigateToSeccion(id: string) {
    this.renderer.setProperty(window, 'scrollTo', 0);
    this.router.navigate(['/secciones', id]);
  }
}
