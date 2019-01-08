import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

import { ComponentsModule } from '../components/components.module';
import { SideNavComponent } from '../components/side-nav/side-nav.component';
import { SideBarComponent } from '../components/side-bar/side-bar.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        ComponentsModule
    ],
    declarations: [
        HomeComponent,
        SideNavComponent,
        SideBarComponent
    ],
    exports:[ HomeComponent ],
    providers: []
})
export class HomeModule { }
