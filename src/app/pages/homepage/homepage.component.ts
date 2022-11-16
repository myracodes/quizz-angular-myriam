import { Component } from '@angular/core';
import { categories } from 'src/app/quizz-categories';
import { quizzes } from '../../quizzes';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent  {

  quizzes = quizzes;
  categories = categories;

}
