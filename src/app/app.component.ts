import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OceanAnimationComponent } from './ocean-animation/ocean-animation.component';
import { SkyAnimationComponent } from './sky-animation/sky-animation.component';
import { VolcanoAnimationComponent } from './volcano-animation/volcano-animation.component';
import { DesertAnimationComponent } from './desert-animation/desert-animation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,OceanAnimationComponent,SkyAnimationComponent,VolcanoAnimationComponent,DesertAnimationComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'animated-app';
}
