import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { YagaModule } from '@yaga/leaflet-ng2';


import { AppComponent } from './app.component';
import { MainMapComponent } from './main-map/main-map.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { LeafletPmtoolbarDirective } from './leaflet-pmtoolbar.directive';
import { FormsModule } from '@angular/forms';
import { DangerPointService } from './shared/danger-point.service';
import { MapPositionService } from './main-map/map-position.service';
import { LeafletIconGlyphDirective } from './leaflet-icon-glyph.directive';
import { MapEditModeService } from './main-map/map-edit-mode.service';

@NgModule({
  declarations: [
    AppComponent,
    MainMapComponent,
    SidebarComponent,
    FooterComponent,
    LeafletPmtoolbarDirective,
    LeafletIconGlyphDirective
  ],
  imports: [
    BrowserModule,
    YagaModule,
    FormsModule
  ],
    providers: [DangerPointService, MapPositionService, MapEditModeService],
    bootstrap: [AppComponent]
})
export class AppModule { }
