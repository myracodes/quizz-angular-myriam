import { Component, Input, OnInit } from '@angular/core';
import { IQuizz, quizzes } from '../quizzes';

@Component({
  selector: 'app-quizz-card',
  templateUrl: './quizz-card.component.html',
  styleUrls: ['./quizz-card.component.scss']
})

export class QuizzCardComponent implements OnInit {

  constructor() { }

  
  @Input()
  quizz!: IQuizz;

  
  ngOnInit(): void {
  }

  quizzes = quizzes;


}
