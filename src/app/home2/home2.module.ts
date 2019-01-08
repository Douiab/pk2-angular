import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Home2Component } from './home2.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { ComponentsModule } from '../components/components.module';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    ComponentsModule
  ],
  declarations: [
    Home2Component
  ],
    exports:[ Home2Component ],
    providers: []
})
export class Home2Module { }
