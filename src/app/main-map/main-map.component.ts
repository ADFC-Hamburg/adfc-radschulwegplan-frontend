
import { Component, ViewEncapsulation, Input, ViewChild, Output, EventEmitter, AfterViewInit, OnInit } from '@angular/core';
import { MapComponent } from '@yaga/leaflet-ng2';
import { DangerPoint } from '../shared/danger-point';
import { DangerPointService } from '../shared/danger-point.service';
import { EditMode } from '../shared/edit-mode-enum';
import { MapPositionService } from './map-position.service';
import { environment } from '../../environments/environment';
import { GLYPH_MARKER_ICON } from '../consts';
import 'leaflet';
//import 'leaflet.pm/js/L.PM';
import 'leaflet.pm';


@Component({
    selector: 'app-main-map',
    templateUrl: './main-map.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./main-map.component.css',
                '../../../src/leaflet.pm/css/controls.css',
                '../../../src/leaflet.pm/css/layers.css',
               ]
})

export class MainMapComponent implements OnInit, AfterViewInit {
    apiKey: string

    lat: number
    lon: number
    zoom: number
      @ViewChild('mainMap', { read: MapComponent }) private mapComponent: MapComponent;
    constructor(private dangerPointService:DangerPointService, public posService: MapPositionService) { }

    ngOnInit() {
        this.lat = 53.55;
        this.lon = 9.99;
        this.zoom = 10;
        this.apiKey = environment.openCycleMapApiKey;
    }
    public ngAfterViewInit(): void {

//debugger;
       this.mapComponent.pm = new L.PM.Map(this.mapComponent);


            var glyphIcon = L.icon({
            iconUrl: GLYPH_MARKER_ICON,
            iconSize:     [25, 48], // size of the icon
            shadowSize:   [41, 48], // size of the shadow
            iconAnchor:   [12, 48], // point of the icon which will correspond to marker's location
        });

        this.mapComponent.pm.enableDraw('Marker', {
            snappable: false,
            opacity: 0.5,
            draggable: true,
            markerStyle: {
                icon: glyphIcon
            }
        });
        this.mapComponent.pm.disableDraw();
        var self =this.mapComponent;
        mapProvider.ref.on('pm:marker:create', function (e:any) {
            console.log('CREATE',e, arguments);
            dangerPointService.newPointWithPos(e.lat, e.lng);
            self.editModeService.setMode(EditMode.NORMAL);
            self.pm.disableDraw();
        });
    }
}
