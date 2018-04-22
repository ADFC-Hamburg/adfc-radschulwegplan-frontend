import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MainMapComponent } from '../main-map/main-map.component';
import { EditMode } from '../shared/edit-mode-enum';
import { EditModeAware } from '../shared/edit-mode-enum-aware';
import { MapEditModeService } from '../main-map/map-edit-mode.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
@EditModeAware

export class SidebarComponent {

    private mapEditModeService: MapEditModeService;
    
    constructor(
        mapEditModeService: MapEditModeService
    ) {
        this.mapEditModeService = mapEditModeService;
    }

    changeMode(val: EditMode) {
        if (this.isMode(val)) {
            this.mapEditModeService.setMode(EditMode.NORMAL);
        } else {
            this.mapEditModeService.setMode(val);
        }
    }

    isMode(val: EditMode) {
        return  (this.mapEditModeService.getMode()==val);
    }

}
