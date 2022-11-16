import { Component } from '@angular/core';
import { quizzes } from '../../quizzes';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent  {

  quizzes = quizzes;

}
