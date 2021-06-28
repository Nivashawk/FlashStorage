import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule} from '@angular/forms';




import { HeaderComponent } from './components/header/header.component';

import { DiComponent } from './components/forms/di/di.component';
import { ConfirmingComponent } from './components/forms/confirming/confirming.component';











@NgModule({
  declarations: [
    AppComponent,
    RoutingComponent,
    HeaderComponent,
    DiComponent,
    ConfirmingComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
