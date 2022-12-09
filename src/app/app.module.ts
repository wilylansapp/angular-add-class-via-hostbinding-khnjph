import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { BindingDirective } from './binding.directive'

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, BindingComponent, BindingDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
