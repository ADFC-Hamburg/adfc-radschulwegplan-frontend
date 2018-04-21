import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MainMapComponent } from '../main-map/main-map.component';
import { EditMode } from '../shared/edit-mode-enum';
import { EditModeAware } from '../shared/edit-mode-enum-aware';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
@EditModeAware

export class SidebarComponent implements OnInit {

    editMode: EditMode;
    
    @Output('modeChange') public modeChangeEvent: EventEmitter<EditMode> = new EventEmitter();

    constructor() { }

    ngOnInit() {
        this.editMode=EditMode.NORMAL;
    }

    changeMode(val: EditMode) {
        if (this.editMode == val) {
            val = EditMode.NORMAL;
        }
        
        this.modeChangeEvent.emit(val);
        this.editMode=val;
        
    }
}
