import { Directive, EventEmitter, SkipSelf, Input, Output } from '@angular/core';
import { MapProvider } from '@yaga/leaflet-ng2';
import { DangerPointService } from './shared/danger-point.service';
import { LatLng, LeafletEvent} from 'leaflet';
import { MapEditModeService } from './main-map/map-edit-mode.service';
//console.log(LeafletEvent);
//import { Map } from 'leaflet';
import * as L from 'leaflet';
import 'leaflet.pm/js/L.PM';
import { GLYPH_MARKER_ICON } from './consts';

import { EditMode } from './shared/edit-mode-enum';
import { Subscription } from 'rxjs/Subscription';

@Directive({
//    providers: [ MapProvider ],
    selector: 'leaflet-pm-toolbar'
})
export class LeafletPmtoolbarDirective  {
    

    private pm: any;
    private editModeSubscription: Subscription;
    private editMode: EditMode;
    private editModeService: MapEditModeService;

    constructor(
        mapProvider: MapProvider,
        dangerPointService: DangerPointService,
        editModeService: MapEditModeService,
    ) {
        this.editModeService = editModeService;
        this.editModeSubscription = editModeService.getModeObs().subscribe( mode => this.changeEditMode(mode));

        //        super();
        this.pm=(mapProvider.ref as any).pm;
        var glyphIcon = L.icon({
            iconUrl: GLYPH_MARKER_ICON,
            iconSize:     [25, 48], // size of the icon
            shadowSize:   [41, 48], // size of the shadow
            iconAnchor:   [12, 48], // point of the icon which will correspond to marker's location
        });
        this.pm.enableDraw('Marker', {
            snappable: false,
            opacity: 0.5,
            draggable: true,
            markerStyle: {
                icon: glyphIcon
            }
        });
        this.pm.disableDraw();
        var self =this;
        mapProvider.ref.on('pm:marker:create', function (e:any) {
            console.log('CREATE',e, arguments);
            dangerPointService.newPointWithPos(e.lat, e.lng);
            self.editModeService.setMode(EditMode.NORMAL);
            self.pm.disableDraw();
        });
        this.editMode= EditMode.NORMAL;
    }

    public changeEditMode(val: EditMode) {

        if (val == this.editMode) {
            // no change:
            return;
        }

        // quit oldMode:
        switch (+this.editMode) {
            case EditMode.MARKER:
                this.pm.disableDraw()
                break;
            case EditMode.LINE:
                this.pm.disableDraw()
                break;
            case EditMode.EDIT:
                this.pm.toggleGlobalEditMode();
                break;
            case EditMode.DELETE:
                this.pm.toggleGlobalRemovalMode();
                break;
        }
        this.editMode=val;
        // set new Mode
        switch (+this.editMode) {
            case EditMode.MARKER:
                this.pm.enableDraw('Marker');
                break;
            case EditMode.LINE:
                this.pm.enableDraw('Line');
                break;
            case EditMode.EDIT:
                this.pm.toggleGlobalEditMode();
                break;
            case EditMode.DELETE:
                this.pm.toggleGlobalRemovalMode();
                break;
        }
    }
}
