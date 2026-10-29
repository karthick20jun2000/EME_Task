import { Routes } from '@angular/router';
import { Offloading } from './pages/offloading/offloading';
import { TruckIn } from './pages/truck-in/truck-in';
import { PurchasePricing } from './pages/purchase-pricing/purchase-pricing/purchase-pricing';
export const routes: Routes = [
{
    path: '',
    redirectTo: 'truckin',
    pathMatch: 'full'
  },
  {
    path:'truckin',
    component:TruckIn
  },
  {
    path:'offloading',
    component:Offloading
  },
  {
    path:'purchase',
    component:PurchasePricing
  }
];
