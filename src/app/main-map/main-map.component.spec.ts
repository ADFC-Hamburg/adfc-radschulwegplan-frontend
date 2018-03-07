import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMapComponent } from './main-map.component';

import  { YagaModule } from '@yaga/leaflet-ng2';
describe('MainMapComponent', () => {
  let component: MainMapComponent;
  let fixture: ComponentFixture<MainMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [ MainMapComponent],
        imports: [ YagaModule ]
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
