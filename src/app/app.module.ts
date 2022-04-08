import { reducers } from './reducers';
import { PostsEffects } from './effects/posts.effects';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { SearchComponent } from './components/search/search.component';
import { AppRoutingModule } from './modules/app-routing.module';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { ListPageComponent } from './components/list-page/list-page.component';
import { PrimeModules } from './modules/prime.module';


@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    SearchComponent,
    PostDetailComponent,
    ListPageComponent
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    PrimeModules,
    AppRoutingModule,
    EffectsModule.forRoot([PostsEffects]),
    StoreModule.forRoot(reducers),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
