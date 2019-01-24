import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceCardListComponent } from './race-card-list.component';

describe('RaceCardListComponent', () => {
  let component: RaceCardListComponent;
  let fixture: ComponentFixture<RaceCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaceCardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
