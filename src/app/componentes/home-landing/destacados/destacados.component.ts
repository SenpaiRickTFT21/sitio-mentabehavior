import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-destacados',
  templateUrl: './destacados.component.html',
  styleUrls: ['./destacados.component.css', '../home-landing.component.css'],
})
export class DestacadosComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToSeccion(id: string) {
    //console.log('Selected id:string:', article);
    this.router.navigate(['/secciones', id]);
  }
}
