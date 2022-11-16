import { Component } from '@angular/core';
import { homeOfficeOptions } from 'src/question-cards/home-office';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.scss']
})
export class QuestionCardComponent {

  options = homeOfficeOptions;
  
}
