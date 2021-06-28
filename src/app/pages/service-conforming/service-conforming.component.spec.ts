import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceConformingComponent } from './service-conforming.component';

describe('ServiceConformingComponent', () => {
  let component: ServiceConformingComponent;
  let fixture: ComponentFixture<ServiceConformingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceConformingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceConformingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
