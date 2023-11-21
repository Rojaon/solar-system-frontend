import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoonComponent } from './moon.component';

describe('MoonComponent', () => {
  let component: MoonComponent;
  let fixture: ComponentFixture<MoonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoonComponent]
    });
    fixture = TestBed.createComponent(MoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
