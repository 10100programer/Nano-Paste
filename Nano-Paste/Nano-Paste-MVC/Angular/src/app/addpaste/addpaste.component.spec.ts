import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpasteComponent } from './addpaste.component';

describe('AddpasteComponent', () => {
  let component: AddpasteComponent;
  let fixture: ComponentFixture<AddpasteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddpasteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpasteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
