import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolcanoAnimationComponent } from './volcano-animation.component';

describe('VolcanoAnimationComponent', () => {
  let component: VolcanoAnimationComponent;
  let fixture: ComponentFixture<VolcanoAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VolcanoAnimationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolcanoAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
