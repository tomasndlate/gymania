import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { MobileRouteComponent } from './mobile-route/mobile-route.component';



@NgModule({
  declarations: [
    NavbarComponent,
    MobileRouteComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
