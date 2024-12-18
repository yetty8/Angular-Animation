import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OceanAnimationComponent } from './ocean-animation/ocean-animation.component';
import { DesertAnimationComponent } from './desert-animation/desert-animation.component';
import { VolcanoAnimationComponent } from './volcano-animation/volcano-animation.component';
import { SkyAnimationComponent } from './sky-animation/sky-animation.component';

@NgModule({
  declarations: [
    AppComponent,
    OceanAnimationComponent,
    DesertAnimationComponent,
    VolcanoAnimationComponent,
    SkyAnimationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }