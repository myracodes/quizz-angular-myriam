import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuizzCardComponent } from './components/quizz-card/quizz-card.component';
import { QuizzCategoriesComponent } from './components/quizz-categories/quizz-categories.component';
import { QuestionCardComponent } from './components/question-card/question-card.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

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
