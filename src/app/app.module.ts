import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PlanetComponent } from './components/planet/planet.component';
import { MoonComponent } from './components/moon/moon.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddMoonFormComponent } from './components/add-moon-form/add-moon-form.component';
import { PlanetDetailComponent } from './components/planet-detail/planet-detail.component';
import { MoonDatailComponent } from './components/moon-datail/moon-datail.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PlanetComponent,
    MoonComponent,
    FooterComponent,
    AddMoonFormComponent,
    PlanetDetailComponent,
    MoonDatailComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
