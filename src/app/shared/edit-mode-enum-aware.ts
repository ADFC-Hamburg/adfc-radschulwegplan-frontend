import { EditMode } from './edit-mode-enum';

export function EditModeAware(constructor: Function) {
    constructor.prototype.EditMode = EditMode;
}
