// Core
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Components
import { AppComponent } from './app.component';
// Modules
import { StoreModule } from './store/store.module';

@NgModule({
  imports: [BrowserModule, StoreModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
