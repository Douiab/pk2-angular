import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

import { HomeComponent } from './home/home.component';
import { Home2Component } from './home2/home2.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { DotationsComponent } from './components/dotations/dotations.component';
import { OperationsComponent } from './components/operations/operations.component';


const routes: Routes =[
    { path: 'home',
      component: HomeComponent,
      children: [
        { path: 'operations',     component:  OperationsComponent},
        { path: 'dotations',      component: DotationsComponent }
      ]
    },
    { path: 'home2',            component: Home2Component },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'signup',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'nucleoicons',      component: NucleoiconsComponent },
    { path: '', redirectTo: 'landing', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
