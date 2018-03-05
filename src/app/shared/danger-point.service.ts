import { Injectable, OnInit } from '@angular/core';
import { DangerPoint } from '../shared/danger-point';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from "rxjs/Rx"
import {List} from 'immutable';

@Injectable()
export class DangerPointService implements OnInit {

  public danger_points_old: DangerPoint[];
  private _danger_points: BehaviorSubject<List<DangerPoint>> = new BehaviorSubject(List([]));

  public readonly danger_points: Observable<List<DangerPoint>> = this._danger_points.asObservable();

  constructor() {
        this.addPoint(new DangerPoint(
        53.5,10,'Bordstein zu hoch', 'hier sollte der Bordstein abgesenkt werden, weil sonst die Rollstuhlfahrer aus dem Behindertenheim über den Radweg fahren',42));
      this.addPoint(new DangerPoint(
        53.51,9.9,'Toter Winkel durch Werbeschild', 'Die Reklame verhindert, das Radfahrer aus der Ausfahrt gesehen werden.',12));
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
                  53.52,10.05,'', '',0
              )
          )
  }

}
