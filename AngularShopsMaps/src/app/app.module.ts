import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MenuComponent } from './components/menu/menu.component';

import { RouterModule }   from '@angular/router';
import { ShopsComponent } from './components/shops/shops.component';
import { AtmsComponent } from './components/atms/atms.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MenuComponent,
    ShopsComponent,
    AtmsComponent
  ],
  imports: [
    BrowserModule,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
