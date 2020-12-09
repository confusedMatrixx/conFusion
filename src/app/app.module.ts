import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//imported to use angular material, flex-layout and angular animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
//to import mat-grid-list
import { MatGridListModule } from '@angular/material/grid-list';
//to import button
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
//to import mat-card
import { MatCardModule } from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
//to import spinner
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
//For template drived form
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
//For Reactive Forms
import {ReactiveFormsModule} from '@angular/forms';
//For form fields
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

//still to find what is the essense of this
import 'hammerjs';

//components
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { LoginComponent } from './login/login.component';

//services
import { DishService } from './services/dish.service';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { PromotionService } from './services/promotion.service';
import { LeaderService } from './services/leader.service';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatGridListModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    DishService,
    PromotionService,
    LeaderService
  ],
  entryComponents: [
    LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  title = 'conFusion';
}
