import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AppHeroComponent } from './app-hero/app-hero.component';
import { AppBottomComponent } from './app-bottom/app-bottom.component';
import { AppBlogcontentComponent } from './app-blogcontent/app-blogcontent.component';
import { AppFooterComponent } from './app-footer/app-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    AppHeroComponent,
    AppBottomComponent,
    AppBlogcontentComponent,
    AppFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
