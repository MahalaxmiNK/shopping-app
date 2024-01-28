import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselComponent } from './carousel.component';

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarouselComponent],
    });
    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
    expect(component.images).toEqual([]);
    expect(component.indicators).toBeTrue();
    expect(component.selectedIndex).toBe(0);
  });

  it('should update selectedIndex on selectImage', () => {
    component.selectImage(2);
    expect(component.selectedIndex).toBe(2);

    component.selectImage(4);
    expect(component.selectedIndex).toBe(4);
  });
});
