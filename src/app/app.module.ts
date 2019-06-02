import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { Ps1GraphicListComponent } from './ps1Editor/ps1-graphic-list/ps1-graphic-list.component';
import { Ps1ElementComponent } from './ps1Editor/ps1-element/ps1-element.component';

// fontawesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowsAlt, faPalette, faCog, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { Ps1StringDisplayComponent } from './ps1Editor/ps1-string-display/ps1-string-display.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    Ps1GraphicListComponent,
    Ps1ElementComponent,
    Ps1StringDisplayComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor () {
    library.add(faArrowsAlt, faPalette, faCog, faTimesCircle);
  }
}
