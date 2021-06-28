import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DitGeneralComponent } from './dit-general.component';

describe('DitGeneralComponent', () => {
  let component: DitGeneralComponent;
  let fixture: ComponentFixture<DitGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DitGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DitGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
