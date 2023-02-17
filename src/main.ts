import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.routes';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(appRoutes, withEnabledBlockingInitialNavigation())],
}).catch((err) => console.error(err));
