import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

import { ComponentsModule } from '../components/components.module';
import { SideNavComponent } from '../components/side-nav/side-nav.component';
import { SideNavAdComponent } from '../components/side-nav-ad/side-nav-ad.component';
import { SideBarComponent } from '../components/side-bar/side-bar.component';
import { DotationsComponent } from '../components/dotations/dotations.component';
import { OperationsComponent } from '../components/operations/operations.component';


@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        ComponentsModule,
        NgbModule
    ],
    declarations: [
        HomeComponent,
        SideNavComponent,
        SideBarComponent,
        DotationsComponent,
        OperationsComponent,
        SideNavAdComponent
    ],
    exports:[ HomeComponent ],
    providers: []
})
export class HomeModule { }
