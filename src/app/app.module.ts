import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { GitsearchService } from './gitsearch.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { CompleteDatePipe } from './complete-date.pipe';
import { OnHoverDirective } from './on-hover.directive';
import { SearchUserComponent } from './search-user/search-user.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchRepoComponent } from './search-repo/search-repo.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    CompleteDatePipe,
    OnHoverDirective,
    SearchUserComponent,
    NotFoundComponent,
    SearchRepoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GitsearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
