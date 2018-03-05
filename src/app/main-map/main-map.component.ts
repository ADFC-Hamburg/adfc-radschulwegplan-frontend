import { Component, OnInit } from '@angular/core';
import { DangerPoint } from '../shared/danger-point';
import { DangerPointService } from '../shared/danger-point.service';
import { MapPositionService } from './map-position.service';

@Component({
  selector: 'app-main-map',
  templateUrl: './main-map.component.html',
  styleUrls: ['./main-map.component.css']
})
export class MainMapComponent implements OnInit {
  lat: number
  lon: number
  zoom: number
    constructor(private dangerPointService:DangerPointService, public posService: MapPositionService) { }

  ngOnInit() {
    this.lat=53.55;
    this.lon=9.99;
    this.zoom=10;
  }

}
