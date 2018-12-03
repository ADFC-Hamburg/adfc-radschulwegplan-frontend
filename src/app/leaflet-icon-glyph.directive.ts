import {
    Directive,
    EventEmitter,
    Input,
    Output,
    OnInit,
} from '@angular/core';
import {
    Icon,
    LeafletEvent,
    Point,
    DomUtil,
} from 'leaflet';
import { GLYPH_MARKER_ICON } from './consts';
import { MarkerProvider } from '@yaga/leaflet-ng2/lib/marker.provider';

@Directive({
  selector: 'leaflet-icon-glyph'
})

/**
 * Angular2 directive for Leaflet icons.
 *
 * *You can use this directive in an Angular2 template after importing `YagaModule`.*
 *
 * How to use in a template:
 * ```html
 * <yaga-map>
 *     <yaga-marker>
 *         <leaflet-icon-glyph
 *             [prefix]="..."
 *             [glyph]="..."
 *             [cssClass]="..."
 *             [iconUrl]="..."
 *         </leaflet-icon-glyph>
 *     </yaga-marker>
 * </yaga-map>
 * ```
 *
 */

export class LeafletIconGlyphDirective extends Icon implements OnInit  {
 /**
     * This is an EventEmitter used to notify on any change in this object. It is mainly created to provide reactions
     * of the marker directive on changes.
     */
    @Output('update') public updateEvent: EventEmitter<LeafletEvent> = new EventEmitter();

//    private className: string;
    private _prefix: string;
    private _glyph: string;
    private _glyphColor: string;
    private _glyphSize: string;
    private _glyphAnchor: Point;
    private _bgPos: Point;
    private _bgSize: Point;
    constructor(public markerProvider: MarkerProvider) {
        super({
            iconUrl: GLYPH_MARKER_ICON,
            iconSize: new Point(25, 48),
            iconAnchor: new Point(12, 48),
            popupAnchor: new Point(0, -38),
            shadowSize: new Point(41, 48),
            className: '',
/*          prefix: '',
            glyph: 'home',
            glyphColor: 'white',
            glyphSize: '11px',  // in CSS units
            glyphAnchor: new Point(0, -7),*/
        });

        this._prefix = '';
        this._glyph = 'home';
        this._glyphColor = 'white';
        this._glyphAnchor = new Point(0, -7);
        // this._bgSize
        // this._bgPos
        this.markerProvider.ref.setIcon(this);
    }

    ngOnInit() {
//        this.iconSize= new Point(25, 41);
    }
    /**
     *
     */
    @Input() public set prefix(val: string) {
        this._prefix = val;
        this.markerProvider.ref.setIcon(this);
        this.updateEvent.emit({
            target: this,
            type: 'update',
        });
    }
    public get prefx(): string {
        return this._prefix;
    }

    /**
     *
     */
    @Input() public set glyph(val: string) {
        this._glyph = val;
        this.markerProvider.ref.setIcon(this);
        this.updateEvent.emit({
            target: this,
            type: 'update',
        });

    }
    public get glyph(): string {
        return this._glyph;
    }

    /**
     *
     */
/*    @Input() public set cssClass(val: string) {
        this.options.cssClass = val;
        this.markerProvider.ref.setIcon(this);
        this.updateEvent.emit({
            target: this,
            type: 'update',
        });
    }
    public get cssClass():string {
        return this.options.cssClass;
    }
*/
   /**
     * Input for the icon-url.
     * Use it with `<yaga-icon [iconUrl]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#icon-iconurl Original Leaflet documentation
     */
    @Input() public set iconUrl(val: string) {
        this.options.iconUrl = val;
        this.markerProvider.ref.setIcon(this);
        this.updateEvent.emit({
            target: this,
            type: 'update',
        });
    }
    public get iconUrl(): string {
        return this.options.iconUrl;
    }
     /**
     * Input for the icon-size.
     * Use it with `<yaga-icon [iconSize]="someValue">`
     * @link http://leafletjs.com/reference-1.2.0.html#icon-iconsize Original Leaflet documentation
     */
    @Input() public set iconSize(val: Point) {
        this.options.iconSize = val;
        this.markerProvider.ref.setIcon(this);
        this.updateEvent.emit({
            target: this,
            type: 'update',
        });
    }
    public get iconSize(): Point {
        return (this.options.iconSize as Point);
    }

    @Input() public set bgSize(val: Point) {
        this._bgSize = val;
        this.markerProvider.ref.setIcon(this);
        this.updateEvent.emit({
            target: this,
            type: 'update',
        });
    }
    public get bgSize(): Point {
        return (this._bgSize as Point);
    }
    @Input() public set bgPos(val: Point) {
        this._bgPos = val;
        this.markerProvider.ref.setIcon(this);
        this.updateEvent.emit({
            target: this,
            type: 'update',
        });
    }
    public get bgPos(): Point {
        return (this._bgPos as Point);
    }

    /**
     * This inherited function enhances the directive with an own css-class and clones the its html content into the
     * leaflet div icon.
     */
    public createIcon(oldDivIcon: HTMLElement): HTMLElement {
        const div = document.createElement('div'),
              options = this.options;

        if (this._glyph) {
            div.appendChild(this.createGlyph());
        }

        this._setIconStyles(div, this.options.className);
        return div;
    }

    private createGlyph() {
        let glyphClass, textContent;
        const options = this.options;

        if (!this._prefix) {
            glyphClass = '';
            textContent = this._glyph;
        } else if (this._glyph.slice(0, this._prefix.length + 1) === this._prefix + '-') {
            glyphClass = this._glyph;
        } else {
            glyphClass = this._prefix + '-' + this._glyph;
        }

        // console.log('leaflet-icon-glpyh.createGlyph',options.iconSize);
        let span = DomUtil.create('span', this._prefix + ' ' + glyphClass);
        span.style.fontSize = this._glyphSize;
        span.style.color = this._glyphColor;
        // FIXME warum muss man hier einen Typecast machen?
        span.style.width = (options.iconSize as Point).x + 'px';
        span.style.lineHeight = (options.iconSize as Point).y + 'px';
        span.style.textAlign = 'center';
        span.style.marginLeft = (this._glyphAnchor as Point).x + 'px';
        span.style.marginTop = (this._glyphAnchor as Point).y + 'px';
        span.style.pointerEvents = 'none';

        if (textContent) {
            span.innerHTML = textContent;
            span.style.display = 'inline-block';
        }

        return span;
    }

    private  _getIconUrl(name: string) {
        // original:
        // return this.options.retina && this.options[name + 'RetinaUrl'] || this.options[name + 'Url'];
        return this.options[name + 'Url'];
    }

    private _setIconStyles(div: HTMLElement, name: string) {
        if (name === 'shadow') {
            //  FIXME    return Icon.prototype._setIconStyles.call(this, div, name);
            return ;
        }

        const size = this.options.iconSize as Point;
        let anchor = this.options.iconAnchor as Point;

        if (!anchor && size) {
            anchor =  size.divideBy(2);
        }

        div.className = 'leaflet-marker-icon leaflet-glyph-icon ' + name;
        const src = this._getIconUrl('icon');
        if (src) {
            div.style.backgroundImage = 'url(\'' + src + '\')';
        }

        if (this._bgPos) {
            div.style.backgroundPosition = (-this._bgPos.x) + 'px ' + (-this._bgPos.y) + 'px';
        }
        if (this._bgSize) {
            div.style.backgroundSize = (this._bgSize.x) + 'px ' + (this._bgSize.y) + 'px';
        }

        if (anchor) {
            div.style.marginLeft = (-anchor.x) + 'px';
            div.style.marginTop  = (-anchor.y) + 'px';
        }

        if (size) {
            div.style.width  = size[0] + 'px';
            div.style.height = size[1] + 'px';
        }
    }

}
