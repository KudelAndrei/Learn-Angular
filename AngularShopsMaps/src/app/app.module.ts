import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MenuComponent } from './components/menu/menu.component';

import { RouterModule }   from '@angular/router';
import { ShopsComponent } from './components/shops/shops.component';
import { AgmCoreModule } from '@agm/core';
import { HttpModule } from '@angular/http';
import { APP_ROUTER } from './app.router';
import { HttpService } from './services/http.service';
import { DirectionsMapDirective } from './services/directions.directive';
import { ShopDescriptionComponent } from './components/shopdescription/shopdescription.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MenuComponent,
    ShopsComponent,
    DirectionsMapDirective,
    ShopDescriptionComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCYCpa5JVN6ul4bzY1h2-lz6X5Kw7kQyHg'
    }),
    APP_ROUTER,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
