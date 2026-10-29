import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { Sidebar } from './layout/sidebar/sidebar';
import { TruckIn } from './pages/truck-in/truck-in';
import { Offloading } from './pages/offloading/offloading';
import { PurchasePricing } from './pages/purchase-pricing/purchase-pricing/purchase-pricing';

@Component({
  selector: 'app-root',
  imports: [Header, Sidebar, TruckIn, RouterOutlet, Offloading, PurchasePricing],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('EME_Task');
   isSidebarOpen = false;

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  closeSidebar(): void {
    this.isSidebarOpen = false;
  }
}
