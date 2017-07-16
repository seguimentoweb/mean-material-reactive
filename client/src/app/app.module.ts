import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from "@angular/http";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from "@ngrx/effects";
import { RouterStoreModule } from "@ngrx/router-store";
import { AppComponent } from './app.component'
import { AppRoutingModule } from "./app-routing.module";
import { SharedModule } from "./shared/shared.module";
import { HerosModule } from "./heros/heros.module";
import { reducer } from "./app.reducers";
import { HerosService } from "./core/services/heros.service";
import { HeroEffects } from "./heros/heros.effects";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    EffectsModule.run(HeroEffects),
    HttpModule,
    HerosModule,
    RouterStoreModule.connectRouter(),
    SharedModule,
    StoreModule.provideStore(reducer)
  ],
  providers: [
    HerosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }