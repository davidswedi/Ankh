import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidbarLeftComponent } from './sidbar-left.component';

describe('SidbarLeftComponent', () => {
  let component: SidbarLeftComponent;
  let fixture: ComponentFixture<SidbarLeftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SidbarLeftComponent]
    });
    fixture = TestBed.createComponent(SidbarLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
