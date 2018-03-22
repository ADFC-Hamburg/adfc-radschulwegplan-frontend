import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMapComponent } from './main-map.component';

import  { YagaModule } from '@yaga/leaflet-ng2';
import { LeafletPmtoolbarDirective } from '../leaflet-pmtoolbar.directive';
import { LeafletIconGlyphDirective } from '../leaflet-icon-glyph.directive';
import { FormsModule }   from '@angular/forms';
import { DangerPointService } from '../shared/danger-point.service';
import { MapPositionService } from '../main-map/map-position.service';


describe('MainMapComponent', () => {
  let component: MainMapComponent;
  let fixture: ComponentFixture<MainMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [
	    MainMapComponent,
	    LeafletPmtoolbarDirective,
	    LeafletIconGlyphDirective,
	],
        imports: [
	    YagaModule,
	    FormsModule,
	],
	providers: [
	    DangerPointService,
	    MapPositionService
	]
	
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
