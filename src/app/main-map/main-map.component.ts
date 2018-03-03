import { Component, OnInit } from '@angular/core';
import { DangerPoint } from '../shared/danger-point';
@Component({
  selector: 'app-main-map',
  templateUrl: './main-map.component.html',
  styleUrls: ['./main-map.component.css']
})
export class MainMapComponent implements OnInit {

  danger_points: DangerPoint[];
  constructor() { }

  ngOnInit() {
    this.danger_points= [
      new DangerPoint(
        53.5,10,'Bordstein zu hoch', 'hier sollte der Bordstein abgesenkt werden, weil sonst die Rollstuhlfahrer aus dem Behindertenheim über den Radweg fahren',42),
      new DangerPoint(
        53.51,9.9,'Toter Winkel durch Werbeschild', 'Die Reklame verhindert, das Radfahrer aus der Ausfahrt gesehen werden.',12)
        ];
  }

}
