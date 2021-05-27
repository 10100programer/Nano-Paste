import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasteviewComponent } from './pasteview.component';

describe('PasteviewComponent', () => {
  let component: PasteviewComponent;
  let fixture: ComponentFixture<PasteviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasteviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasteviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
