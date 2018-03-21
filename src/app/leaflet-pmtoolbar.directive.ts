import { Directive, SkipSelf } from '@angular/core';
import { MapProvider } from '@yaga/leaflet-ng2';
import { DangerPointService } from './shared/danger-point.service';
import { LatLng, LeafletEvent} from 'leaflet';

//console.log(LeafletEvent);
//import { Map } from 'leaflet';
import * as L from 'leaflet';
import 'leaflet.pm/js/L.PM';
import { GLYPH_MARKER_ICON } from './consts';

@Directive({
//    providers: [ MapProvider ],
    selector: 'leaflet-pm-toolbar'
})
export class LeafletPmtoolbarDirective  {

    constructor(
        mapProvider: MapProvider,
        dangerPointService: DangerPointService,
    ) {
        //        super();
         var options = {
            position: 'topleft', // toolbar position, options are 'topleft', 'topright', 'bottomleft', 'bottomright'
            drawMarker: true, // adds button to draw markers
            drawPolyline: true, // adds button to draw a polyline
            drawRectangle: false, // adds button to draw a rectangle
            drawPolygon: false, // adds button to draw a polygon
            drawCircle: false, // adds button to draw a cricle
            cutPolygon: false, // adds button to cut a hole in a polygon
            editMode: true, // adds button to toggle edit mode for all layers
            removalMode: true, // adds a button to remove layers
        };
        var pm=(mapProvider.ref as any).pm;
        pm.addControls(options);
        var glyphIcon = L.icon({
            iconUrl: GLYPH_MARKER_ICON,
            iconSize:     [25, 48], // size of the icon
            shadowSize:   [41, 48], // size of the shadow
            iconAnchor:   [12, 48], // point of the icon which will correspond to marker's location
        });
        pm.enableDraw('Marker', {
            snappable: false,
            opacity: 0.5,
            draggable: true,
            markerStyle: {
                icon: glyphIcon
            }
        });
        pm.disableDraw();
        mapProvider.ref.on('pm:marker:create', function (e:any) {
            console.log('CREATE',e, arguments);
            pm.disableDraw();
            dangerPointService.newPointWithPos(e.lat, e.lng);
        });
/*        mapProvider.ref = this;
        this.addTo(parentMapProvider.ref);
        debugger;*/
    }

}
