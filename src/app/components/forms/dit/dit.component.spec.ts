import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DitComponent } from './dit.component';

describe('DitComponent', () => {
  let component: DitComponent;
  let fixture: ComponentFixture<DitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
