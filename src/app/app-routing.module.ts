import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { PlanetComponent } from './components/planet/planet.component';
import { MoonComponent } from './components/moon/moon.component';
import { AddMoonFormComponent } from './components/add-moon-form/add-moon-form.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "planet",
    component: PlanetComponent
  },
  {
    path: "moon",
    component: MoonComponent
  },
  {
    path: "add-moon-form",
    component: AddMoonFormComponent
  },
  {
    path: "page-not-found",
    component: PageNotFoundComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
