import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quizz-categories',
  templateUrl: './quizz-categories.component.html',
  styleUrls: ['./quizz-categories.component.scss']
})
export class QuizzCategoriesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  categories = [
    {
      name: "latest",
      active: true 
    },
    {
      name: "older",
      active: false 
    },
    {
      name: "advanced",
      active: false 
    },
    {
      name: "beginners",
      active: false 
    }
  ]

}
