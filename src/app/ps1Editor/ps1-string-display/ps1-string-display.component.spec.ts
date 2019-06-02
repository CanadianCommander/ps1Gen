import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ps1StringDisplayComponent } from './ps1-string-display.component';

describe('Ps1StringDisplayComponent', () => {
  let component: Ps1StringDisplayComponent;
  let fixture: ComponentFixture<Ps1StringDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ps1StringDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ps1StringDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
