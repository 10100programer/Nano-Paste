import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestEntriesComponent } from './latest-entries.component';

describe('LatestEntriesComponent', () => {
  let component: LatestEntriesComponent;
  let fixture: ComponentFixture<LatestEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestEntriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
