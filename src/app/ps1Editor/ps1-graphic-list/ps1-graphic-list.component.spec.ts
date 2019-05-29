import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ps1GraphicListComponent } from './ps1-graphic-list.component';

describe('Ps1GraphicListComponent', () => {
  let component: Ps1GraphicListComponent;
  let fixture: ComponentFixture<Ps1GraphicListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ps1GraphicListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ps1GraphicListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
