import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikesHistoryComponent } from './likes-history.component';

describe('LikesHistoryComponent', () => {
  let component: LikesHistoryComponent;
  let fixture: ComponentFixture<LikesHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikesHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LikesHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
