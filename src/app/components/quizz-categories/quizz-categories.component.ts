import { Component, Input } from '@angular/core';
import { ICategory } from 'src/app/shared/models/quizz-categories';

@Component({
  selector: 'app-quizz-categories',
  templateUrl: './quizz-categories.component.html',
  styleUrls: ['./quizz-categories.component.scss']
})
export class QuizzCategoriesComponent {
  
  @Input()
  category!: ICategory;
  
}
