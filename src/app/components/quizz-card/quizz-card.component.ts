import { Component, Input } from '@angular/core';
import { IQuizz } from '../../shared/models/quizz';

@Component({
  selector: 'app-quizz-card',
  templateUrl: './quizz-card.component.html',
  styleUrls: ['./quizz-card.component.scss']
})

export class QuizzCardComponent  {  
  @Input()
  quizz!: IQuizz;

}
