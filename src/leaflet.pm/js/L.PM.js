/**
 *
 * A Leaflet Plugin For Editing Geometry Layers in Leaflet 1.0
 * by Sumit Kumar (@TweetsOfSumit)
 * Github Repo: https://github.com/codeofsumit/leaflet.pm
 */

import './polyfills';

import Map from './L.PM.Map';
import Toolbar from './Toolbar/L.PM.Toolbar';

import Draw from './Draw/L.PM.Draw';
import './Draw/L.PM.Draw.Marker';
import './Draw/L.PM.Draw.Line';

import Edit from './Edit/L.PM.Edit';
import './Edit/L.PM.Edit.LayerGroup';
import './Edit/L.PM.Edit.Marker';
import './Edit/L.PM.Edit.Line';


var version='develop 8a599ddce3f47d62663a2f994f97ef4d8b43b274 adfc-patched';
L.PM = L.PM || {
    Map,
    Toolbar,
    Draw,
    Edit,
    version,
    initialize() {
        this.addInitHooks();
    },
    addInitHooks() {
        function initMap() {
            if (!this.options.pmIgnore) {
                this.pm = new L.PM.Map(this);
            }
        }

        L.Map.addInitHook(initMap);

        function initLayerGroup() {
            this.pm = new L.PM.Edit.LayerGroup(this);
        }

        L.LayerGroup.addInitHook(initLayerGroup);

        function initMarker() {
            if (!this.options.pmIgnore) {
                this.pm = new L.PM.Edit.Marker(this);
            }
        }

        L.Marker.addInitHook(initMarker);

        function initPolyline() {
            if (!this.options.pmIgnore) {
                this.pm = new L.PM.Edit.Line(this);
            }
        }

        L.Polyline.addInitHook(initPolyline);

    },
};

// initialize leaflet.pm
L.PM.initialize();
