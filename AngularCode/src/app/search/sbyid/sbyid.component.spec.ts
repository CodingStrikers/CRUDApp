import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SbyidComponent } from './sbyid.component';

describe('SbyidComponent', () => {
  let component: SbyidComponent;
  let fixture: ComponentFixture<SbyidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SbyidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
