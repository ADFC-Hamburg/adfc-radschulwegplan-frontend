import { Component, OnInit } from '@angular/core';
import { MainMapComponent } from '../main-map/main-map.component';
import { DangerPointService } from '../shared/danger-point.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private dangerPointService:DangerPointService) { }

  ngOnInit() {
  }
  
  newDangerPoint() {
     this.dangerPointService.newPoint();
  }
}
