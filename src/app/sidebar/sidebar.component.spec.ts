import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SidebarComponent } from './sidebar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MapEditModeService } from '../main-map/map-edit-mode.service';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;
  beforeEach(async(() => {
      TestBed.configureTestingModule({
          imports: [RouterTestingModule],
          declarations: [ SidebarComponent ],
          providers: [ MapEditModeService ]
    })
    .compileComponents();
  }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SidebarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
