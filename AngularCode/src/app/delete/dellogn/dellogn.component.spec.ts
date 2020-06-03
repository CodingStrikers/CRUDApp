import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DellognComponent } from './dellogn.component';

describe('DellognComponent', () => {
  let component: DellognComponent;
  let fixture: ComponentFixture<DellognComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DellognComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DellognComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
