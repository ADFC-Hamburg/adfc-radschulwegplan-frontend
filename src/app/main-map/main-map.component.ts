import { Component, OnInit } from '@angular/core';
import { DangerPoint } from '../shared/danger-point';
import { DangerPointService } from '../shared/danger-point.service';
import { Point } from 'leaflet';

@Component({
  selector: 'app-main-map',
  templateUrl: './main-map.component.html',
  styleUrls: ['./main-map.component.css']
})
export class MainMapComponent implements OnInit {
  lat: number
  lon: number
  zoom: number
  constructor(private dangerPointService:DangerPointService) { }

  ngOnInit() {
    this.lat=53.55;
    this.lon=9.99;
    this.zoom=10;
  }

  initPoint(private d:DangerPoint):DangerPoint {
    if (d.editable == null) {
        d.editable=false;
    }
    if (d.lat == null) {
       d.lat= this.lat;
    }
    if (d.lon == null) {
       d.lon= this.lon;
    }
    return d;
  }
}
