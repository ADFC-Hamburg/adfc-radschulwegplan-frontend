import { Injectable, OnInit } from '@angular/core';
import { EditMode } from '../shared/edit-mode-enum';
import { Observable ,  Subject } from 'rxjs';
 
@Injectable()
export class MapEditModeService implements OnInit { 

    private subject = new Subject<EditMode>();

    private mode : EditMode;
    constructor() {
    }
    
    ngOnInit() {
        this.setMode(EditMode.NORMAL);
    }
    
    setMode(mode: EditMode) {
        this.subject.next(mode);
        this.mode=mode;
    }

    getMode():EditMode {
        return this.mode;
    }
    
    getModeObs(): Observable<EditMode> {
        return this.subject.asObservable();
    }
}
