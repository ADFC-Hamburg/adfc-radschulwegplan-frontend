
import { Component, ViewEncapsulation, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { MapComponent } from '@yaga/leaflet-ng2';
import { DangerPoint } from '../shared/danger-point';
import { DangerPointService } from '../shared/danger-point.service';
import { EditMode } from '../shared/edit-mode-enum';
import { MapPositionService } from './map-position.service';
import { environment } from '../../environments/environment';
import 'leaflet';
import 'leaflet.pm';


@Component({
    selector: 'app-main-map',
    templateUrl: './main-map.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./main-map.component.css',
                '../../../node_modules/leaflet.pm/dist/leaflet.pm.css',
               ]
})

export class MainMapComponent implements OnInit {
    apiKey: string

    lat: number
    lon: number
    zoom: number

    constructor(private dangerPointService:DangerPointService, public posService: MapPositionService) { }

    ngOnInit() {
        this.lat = 53.55;
        this.lon = 9.99;
        this.zoom = 10;
        this.apiKey = environment.openCycleMapApiKey;
    }
}
