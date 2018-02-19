import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { YagaModule } from '@yaga/leaflet-ng2';


import { AppComponent } from './app.component';
import { MainMapComponent } from './main-map/main-map.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    MainMapComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    YagaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
