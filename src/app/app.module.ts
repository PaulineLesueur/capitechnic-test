import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ResaListComponent } from './resa-list/resa-list.component';
import { ResaModalComponent } from './resa-list/resa-modal/resa-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ResaListComponent,
    ResaModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
