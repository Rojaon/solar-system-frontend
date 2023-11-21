import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMoonFormComponent } from './add-moon-form.component';

describe('AddMoonFormComponent', () => {
  let component: AddMoonFormComponent;
  let fixture: ComponentFixture<AddMoonFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddMoonFormComponent]
    });
    fixture = TestBed.createComponent(AddMoonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
