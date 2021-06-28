import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceWDComponent } from './service-wd.component';

describe('ServiceWDComponent', () => {
  let component: ServiceWDComponent;
  let fixture: ComponentFixture<ServiceWDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceWDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceWDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
