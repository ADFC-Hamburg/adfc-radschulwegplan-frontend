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
        var pm=(mapProvider.ref as any).pm;
        pm.addControls(options);
        var greenIcon = L.icon({
            iconUrl: 'http://leafletjs.com/examples/custom-icons/leaf-green.png',
            shadowUrl: 'http://leafletjs.com/examples/custom-icons/leaf-shadow.png',

            iconSize:     [38, 95], // size of the icon
            shadowSize:   [50, 64], // size of the shadow
            iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
            shadowAnchor: [4, 62],  // the same for the shadow
            popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
        });
        pm.enableDraw('Marker', {
            snappable: false
            opacity: 0.5,
            draggable: true,
            markerStyle: {
                icon: greenIcon
            }
        });
/*        mapProvider.ref = this;
        this.addTo(parentMapProvider.ref);
        debugger;*/
    }

}
