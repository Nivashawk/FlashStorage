import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule} from '@angular/forms';




import { HeaderComponent } from './components/header/header.component';

// import { DiComponent } from './components/forms/di/di.component';
// import { DiComponent } from '../app/components/forms/';

// import { ConfirmingComponent } from './components/forms/confirming/confirming.component';




@NgModule({
  declarations: [
    AppComponent,
    RoutingComponent,
    HeaderComponent,
    // DiComponent,
    // ConfirmingComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
