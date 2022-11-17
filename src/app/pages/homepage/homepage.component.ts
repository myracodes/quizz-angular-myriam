import { Component } from '@angular/core';
import { categories } from 'src/app/quizz-categories';
import { ICategory } from 'src/app/shared/models/quizz-category';
import { quizzes } from '../../quizzes';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent  {

  quizzes = quizzes;
  categories = categories;

  
  setActive(category: ICategory) {
    categories.forEach((category) => {
      category.active = false
    })
    let selectedCategoryIndex = categories.indexOf(category);
    categories[selectedCategoryIndex].active = true;
  }

}
