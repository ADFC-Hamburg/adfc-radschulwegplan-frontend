import { Injectable } from '@angular/core';

@Injectable()
export class MapPositionService  {
  lat: number;
  lon: number;
  zoom: number;

    constructor() {
        this.lat = 53.5076;
        this.lon = 9.9948;
        this.zoom = 16;
    }

}
