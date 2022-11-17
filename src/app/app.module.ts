import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { QuizzCardComponent } from './components/quizz-card/quizz-card.component';
import { QuizzCategoryComponent } from './components/quizz-category/quizz-category.component';
import { QuestionCardComponent } from './components/question-card/question-card.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuizzCardComponent,
    QuizzCategoryComponent,
    QuestionCardComponent,
    HomepageComponent,
    CheckboxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
