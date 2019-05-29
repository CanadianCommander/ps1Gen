import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ps1ElementComponent } from './ps1-element.component';

describe('Ps1ElementComponent', () => {
  let component: Ps1ElementComponent;
  let fixture: ComponentFixture<Ps1ElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ps1ElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ps1ElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
