import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardDetailsComponent } from './card-details/card-details.component';
import { DateCountPipe } from './date-count.pipe';
import { CardFormComponent } from './card-form/card-form.component';
import { UpvoteDirective } from './upvote.directive';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardDetailsComponent,
    DateCountPipe,
    CardFormComponent,
    UpvoteDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
