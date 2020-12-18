import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialCargoComponent } from './special-cargo.component';

describe('SpecialCargoComponent', () => {
  let component: SpecialCargoComponent;
  let fixture: ComponentFixture<SpecialCargoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialCargoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialCargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
