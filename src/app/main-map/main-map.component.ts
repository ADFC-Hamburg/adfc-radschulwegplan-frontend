import { Component, ViewEncapsulation, OnInit } from '@angular/core';

import { MapComponent } from '@yaga/leaflet-ng2';

console.log(MapComponent);

import 'leaflet';
import 'leaflet.pm/js/L.PM';

@Component({
    selector: 'app-main-map',
    templateUrl: './main-map.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./main-map.component.css',
                '../../../src/leaflet.pm/css/controls.css',
                '../../../src/leaflet.pm/css/layers.css',
               ]
})
export class MainMapComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }
}
