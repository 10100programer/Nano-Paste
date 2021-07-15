import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPasteComponent } from './view-paste.component';

describe('ViewPasteComponent', () => {
  let component: ViewPasteComponent;
  let fixture: ComponentFixture<ViewPasteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPasteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPasteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
