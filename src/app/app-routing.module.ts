import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path:"main",component:MainComponent},
  {path:"about",component:AboutComponent},
  {path:"benefits",component:BenefitsComponent},
  {path:"gallery",component:GalleryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }