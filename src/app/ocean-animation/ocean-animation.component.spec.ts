import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OceanAnimationComponent } from './ocean-animation.component';

describe('OceanAnimationComponent', () => {
  let component: OceanAnimationComponent;
  let fixture: ComponentFixture<OceanAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OceanAnimationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OceanAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
