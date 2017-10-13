import { Routes, RouterModule } from '@angular/router';
import { ShopsComponent } from './components/shops/shops.component';
import { ShopDescriptionComponent } from './components/shopdescription/shopdescription.component';

const appRoutes: Routes = [
		{ path: 'shops', component: ShopsComponent },
    { path: 'shops/:id', component: ShopDescriptionComponent },
    { path: 'atms', component: ShopsComponent },
    { path: '**', redirectTo: '' }
];

export const APP_ROUTER = RouterModule.forRoot(appRoutes);