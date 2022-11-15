import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuizzCardComponent } from './quizz-card/quizz-card.component';
import { QuizzCategoriesComponent } from './quizz-categories/quizz-categories.component';
import { QuestionCardComponent } from './question-card/question-card.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuizzCardComponent,
    QuizzCategoriesComponent,
    QuestionCardComponent,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
