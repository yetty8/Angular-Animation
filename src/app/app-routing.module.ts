import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OceanAnimationComponent } from './ocean-animation/ocean-animation.component';
import { DesertAnimationComponent } from './desert-animation/desert-animation.component';
import { VolcanoAnimationComponent } from './volcano-animation/volcano-animation.component';
import { SkyAnimationComponent } from './sky-animation/sky-animation.component';

const routes: Routes = [
  { path: 'ocean', component: OceanAnimationComponent },
  { path: 'desert', component: DesertAnimationComponent },
  { path: 'volcano', component: VolcanoAnimationComponent },
  { path: 'sky', component: SkyAnimationComponent },
  { path: '', redirectTo: '/ocean', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: '/ocean' } // Wildcard route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }