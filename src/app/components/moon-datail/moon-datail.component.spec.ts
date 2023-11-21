import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoonDatailComponent } from './moon-datail.component';

describe('MoonDatailComponent', () => {
  let component: MoonDatailComponent;
  let fixture: ComponentFixture<MoonDatailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoonDatailComponent]
    });
    fixture = TestBed.createComponent(MoonDatailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
