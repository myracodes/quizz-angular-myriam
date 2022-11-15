import { Component, Input } from '@angular/core';
import { IQuizz, quizzes } from '../quizzes';

@Component({
  selector: 'app-quizz-card',
  templateUrl: './quizz-card.component.html',
  styleUrls: ['./quizz-card.component.scss']
})

export class QuizzCardComponent  {

  constructor() { }
  
  @Input()
  quizz!: IQuizz;

  quizzes = quizzes;

}
