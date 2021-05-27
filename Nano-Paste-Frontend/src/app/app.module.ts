import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PasteviewComponent } from './pasteview/pasteview.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { AddpasteComponent } from './addpaste/addpaste.component';

@NgModule({
  declarations: [
    AppComponent,
    PasteviewComponent,
    BannerComponent,
    FooterComponent,
    AddpasteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
