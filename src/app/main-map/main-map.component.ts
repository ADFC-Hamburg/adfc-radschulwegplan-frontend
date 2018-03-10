import { Component, ViewEncapsulation, OnInit } from '@angular/core';

import 'leaflet';
import 'leaflet.pm';

@Component({
    selector: 'app-main-map',
    templateUrl: './main-map.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./main-map.component.css',
                '../../../node_modules/leaflet.pm/dist/leaflet.pm.css'
               ]
})
export class MainMapComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }
}
