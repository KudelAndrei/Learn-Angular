import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MenuComponent } from './components/menu/menu.component';

import { RouterModule }   from '@angular/router';
import { ShopsComponent } from './components/shops/shops.component';
import { AtmsComponent } from './components/atms/atms.component';
import { AgmCoreModule } from '@agm/core';
import { HttpModule } from '@angular/http';
import { HttpService } from './services/http.service';
import { DirectionsMapDirective } from './services/directions.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MenuComponent,
    ShopsComponent,
    AtmsComponent,
    DirectionsMapDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCYCpa5JVN6ul4bzY1h2-lz6X5Kw7kQyHg'
    }),
    RouterModule.forRoot([
    {
      path: 'shops',
      component: ShopsComponent
    }, 
    {
      path: 'atm',
      component: AtmsComponent
    },
  ])
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
