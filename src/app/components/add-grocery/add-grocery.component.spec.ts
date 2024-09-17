import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGroceryComponent } from './add-grocery.component';

describe('AddGroceryComponent', () => {
  let component: AddGroceryComponent;
  let fixture: ComponentFixture<AddGroceryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddGroceryComponent]
    });
    fixture = TestBed.createComponent(AddGroceryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});