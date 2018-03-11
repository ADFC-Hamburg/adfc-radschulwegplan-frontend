import { Injectable } from '@angular/core';

@Injectable()
export class MapPositionService  { 
  lat: number
  lon: number
  zoom: number

    constructor() {
        this.lat=53.55;
        this.lon=9.99;
        this.zoom=10;
    }

}
