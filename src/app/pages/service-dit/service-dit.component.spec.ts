import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDitComponent } from './service-dit.component';

describe('ServiceDitComponent', () => {
  let component: ServiceDitComponent;
  let fixture: ComponentFixture<ServiceDitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceDitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceDitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
