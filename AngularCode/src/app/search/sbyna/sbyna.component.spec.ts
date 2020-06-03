import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SbynaComponent } from './sbyna.component';

describe('SbynaComponent', () => {
  let component: SbynaComponent;
  let fixture: ComponentFixture<SbynaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SbynaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbynaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
