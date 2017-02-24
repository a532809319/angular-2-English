import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { OtherComponent } from './other/other.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { PropertyBinddingComponent } from './databinding/property-bindding.component';
import { EventBinddingComponent } from './databinding/event-bindding.component';
import { TwoWayBindingComponent } from './databinding/two-way-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    OtherComponent,
    DatabindingComponent,
    PropertyBinddingComponent,
    EventBinddingComponent,
    TwoWayBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
