import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { YagaModule } from '@yaga/leaflet-ng2';


import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { MainMapComponent } from './main-map/main-map.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { LeafletPmtoolbarDirective } from './leaflet-pmtoolbar.directive';
import { FormsModule } from '@angular/forms';
import { DangerPointService } from './shared/danger-point.service';
import { MapPositionService } from './main-map/map-position.service';
import { LeafletIconGlyphDirective } from './leaflet-icon-glyph.directive';
import { MapEditModeService } from './main-map/map-edit-mode.service';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { MainComponent } from './main/main.component';
import { AuthenticationService } from './authentication.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    MainMapComponent,
    SidebarComponent,
    FooterComponent,
    LeafletPmtoolbarDirective,
    LeafletIconGlyphDirective,
    LoginComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    YagaModule,
      FormsModule,
      HttpClientModule,
    routing
  ],
  providers: [
      DangerPointService,
      MapPositionService,
      MapEditModeService,
      AuthenticationService,
      AuthGuard
  ],
    bootstrap: [AppComponent]
})
export class AppModule { }
