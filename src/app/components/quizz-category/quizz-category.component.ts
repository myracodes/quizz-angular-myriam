import { Component, Input } from '@angular/core';
import { ICategory } from 'src/app/shared/models/quizz-category';

@Component({
  selector: 'app-quizz-category',
  templateUrl: './quizz-category.component.html',
  styleUrls: ['./quizz-category.component.scss']
})
export class QuizzCategoryComponent {
  
  @Input()
  category!: ICategory;
  
}
