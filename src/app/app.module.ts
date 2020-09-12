import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//imported to use angular material, flex-layout and angular animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { FlexLayoutModule } from '@angular/flex-layout';
//still to find what is the essense of this
import 'hammerjs';
import { MenuComponent } from './menu/menu.component';

//to import mat-grid-list
import { MatGridListModule } from '@angular/material/grid-list';

//to import button
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
//to import mat-card

import { MatCardModule } from '@angular/material/card';
import { DishdetailComponent } from './dishdetail/dishdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatGridListModule,
    MatButtonModule,
    MatCardModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  title='conFusion';
}
