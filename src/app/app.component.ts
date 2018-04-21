import { Component } from '@angular/core';
import { EditMode } from './shared/edit-mode-enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Radschulwegplan';

    editMode: EditMode;
    modeChange(val: EditMode) {
        this.editMode=val;
    }
}
