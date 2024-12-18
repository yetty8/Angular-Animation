import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkyAnimationComponent } from './sky-animation.component';

describe('SkyAnimationComponent', () => {
  let component: SkyAnimationComponent;
  let fixture: ComponentFixture<SkyAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkyAnimationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkyAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
