import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-mapa',
  template: '<div #mapContainer style="height: 100%;"></div>',
})
export class MapaComponent implements OnInit, OnChanges {
  @ViewChild('mapContainer', { static: true }) mapContainer: ElementRef;
  @Input() center: [number, number];
  @Input() zoom: number;
  map: L.Map;

  ngOnInit(): void {
    this.initializeMap();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.center || changes.zoom) {
      this.updateMapView();
    }
  }

  initializeMap(): void {
    const mapOptions = {
      center: L.latLng(this.center[0], this.center[1]),
      zoom: this.zoom,
    };

    this.map = L.map(this.mapContainer.nativeElement).setView(
      mapOptions.center,
      mapOptions.zoom
    );

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(this.map);

    const customIcon = L.icon({
      iconUrl: './assets/img/mappin.png',
      iconSize: [38, 55],
      iconAnchor: [19, 38],
    });

    const marker = L.marker(mapOptions.center, {
      icon: customIcon,
    }).addTo(this.map);
  }

  updateMapView(): void {
    if (this.map) {
      this.map.setView(L.latLng(this.center[0], this.center[1]), this.zoom);
    }
  }
}
