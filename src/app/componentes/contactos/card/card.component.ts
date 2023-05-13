import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css', '../contactos.component.css'],
})
export class CardComponent implements OnInit {
  @Input() center: [number, number];
  @Input() zoom: number;
  @Input() nombre: string;
  @Input() titulo: string;
  @Input() telefono: string;
  @Input() direccion: string;

  openGoogleMaps() {
    const [latitude, longitude] = this.center;
    const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
    window.open(url, '_blank');
  }
  constructor() {}

  ngOnInit(): void {}
}
