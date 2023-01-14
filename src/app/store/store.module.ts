// Core
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
// Components
import { StoreComponent } from './store.component';
// Modules
import { ModelModule } from '../model/model.module';

@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule],
  exports: [StoreComponent],
  declarations: [StoreComponent],
})
export class StoreModule {}
