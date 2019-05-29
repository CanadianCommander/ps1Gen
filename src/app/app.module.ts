import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { Ps1GraphicListComponent } from './ps1Editor/ps1-graphic-list/ps1-graphic-list.component';
import { Ps1ElementComponent } from './ps1Editor/ps1-element/ps1-element.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    Ps1GraphicListComponent,
    Ps1ElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
