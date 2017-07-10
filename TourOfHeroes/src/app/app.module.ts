import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroDetalComponent } from './hero-detal/hero-detal.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroService } from './services/hero.services';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetalComponent,
    HeroesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
    {
      path: 'heroes',
      component: HeroesComponent
    },
    {
      path: 'dashboard',
      component: DashboardComponent
    },
    {
      path: 'herodetal',
      component: HeroDetalComponent
    },
    // {
    //   path: '',
    //   redirectTo: '/dashboard',
    //   pathMatch: 'full'
    // },
  ]),
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
