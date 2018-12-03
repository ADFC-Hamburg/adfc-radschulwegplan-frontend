import { LeafletIconGlyphDirective } from './leaflet-icon-glyph.directive';
// import { MarkerProvider } from '@yaga/leaflet-ng2/lib/marker.provider';

// import { expect } from 'chai';
import { marker, point } from 'leaflet';
import {
    IconDirective,
    LayerGroupProvider,
    LeafletEvent,
    MapComponent,
    MapProvider,
    Point,
    TRANSPARENT_PIXEL,
} from '@yaga/leaflet-ng2';


describe('LeafletIconGlyphDirective', () => {

    let map: MapComponent;
    let ligd: LeafletIconGlyphDirective;
    beforeEach(() => {
        map = new MapComponent(
            {nativeElement: document.createElement('div')},
            new LayerGroupProvider(),
            new MapProvider(),
        );
        (map as any)._size = point(100, 100);
        (map as any)._pixelOrigin = point(50, 50);
        ligd = new LeafletIconGlyphDirective({ ref: marker([0, 0]) });
    });



  it('should create an instance', () => {
    expect(ligd).toBeTruthy();
  });
});
