import { Injectable, OnInit } from '@angular/core';
import { DangerPoint } from '../shared/danger-point';
import { BehaviorSubject ,  Observable } from 'rxjs';
import {List} from 'immutable';
import { MapPositionService } from '../main-map/map-position.service';

@Injectable()
export class DangerPointService implements OnInit {

  public danger_points_old: DangerPoint[];
  private _danger_points: BehaviorSubject<List<DangerPoint>> = new BehaviorSubject(List([]));

  public readonly danger_points: Observable<List<DangerPoint>> = this._danger_points.asObservable();

    constructor(private mapPos: MapPositionService) {
        this.addPoint(new DangerPoint(
            53.5101, 9.99264, 'Bordstein zu hoch',
            'hier sollte der Bordstein abgesenkt werden, weil sonst die Rollstuhlfahrer aus dem Behindertenheim über den Radweg fahren',
            42, false, false, 'home'));
        this.addPoint(new DangerPoint(
            53.50809, 9.99222, 'Toter Winkel durch Werbeschild',
            'Die Reklame verhindert, das Radfahrer aus der Ausfahrt gesehen werden.',
            12, false, false, 'pause'));
  }

  ngOnInit() {


  }
  addPoint(newPoint: DangerPoint) {
       this._danger_points.next(this._danger_points.getValue().push(newPoint));
  }
/*
    deletePoint(deleted:DangerPoint) {
          let danger_point: List<DangerPoint> = this._danger_point.getValue();
          let index = danger_point.findIndex((danger_point) => danger_point.id === deleted.id);
          this._danger_point.next(danger_point.delete(index));

}*/
  newPoint() {
     this.addPoint(
          new DangerPoint(
              this.mapPos.lat, this.mapPos.lon, '', '', 0, true, true, 'barcode'
              )
          );
  }
    newPointWithPos(lat: number, lon: number): DangerPoint {
        const pt = new DangerPoint(
            lat, lon, '', '', 0, true, false, 'apple'
        );

        this.addPoint(pt);
        // Workaround for bug, that the popup is opened with the wrong size
        setTimeout(() => {
            pt.opened = true;
        }, 1);

        return pt;
    }

}
