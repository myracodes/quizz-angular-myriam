import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { QuestionCardComponent } from './components/question-card/question-card.component';

const routes: Routes = [
  {
    path: 'home-office',
    title: 'Home office quizz',
    component: QuestionCardComponent
  },
  {
    path: '',
    title: 'APMP - homepage',
    component: HomepageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
