import { Directive, SkipSelf } from '@angular/core';
import { MapProvider } from '@yaga/leaflet-ng2';

//import { Map } from 'leaflet';
import * as L from 'leaflet';
import 'leaflet.pm';


@Directive({
//    providers: [ MapProvider ],
    selector: 'leaflet-pm-toolbar'
})
export class LeafletPmtoolbarDirective  {

    constructor(
        mapProvider: MapProvider,
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
        (mapProvider.ref as any).pm.addControls(options);
/*        mapProvider.ref = this;
        this.addTo(parentMapProvider.ref);
        debugger;*/
    }

}
