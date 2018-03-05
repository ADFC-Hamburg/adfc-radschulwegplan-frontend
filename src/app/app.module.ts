import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { YagaModule } from '@yaga/leaflet-ng2';


import { AppComponent } from './app.component';
import { MainMapComponent } from './main-map/main-map.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { DangerPointService } from './shared/danger-point.service';
import { MapPositionService } from './main-map/map-position.service';

@NgModule({
  declarations: [
    AppComponent,
    MainMapComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    YagaModule,
    FormsModule
  ],
    providers: [DangerPointService, MapPositionService],
    bootstrap: [AppComponent]
})
export class AppModule { }
