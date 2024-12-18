import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesertAnimationComponent } from './desert-animation.component';

describe('DesertAnimationComponent', () => {
  let component: DesertAnimationComponent;
  let fixture: ComponentFixture<DesertAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesertAnimationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesertAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
