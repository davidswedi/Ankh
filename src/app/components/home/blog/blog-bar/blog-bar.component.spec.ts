import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogBarComponent } from './blog-bar.component';

describe('BlogBarComponent', () => {
  let component: BlogBarComponent;
  let fixture: ComponentFixture<BlogBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BlogBarComponent]
    });
    fixture = TestBed.createComponent(BlogBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
