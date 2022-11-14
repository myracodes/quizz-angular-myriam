import { Component, Input, OnInit } from '@angular/core';
import { quizzes } from '../quizzes';

@Component({
  selector: 'app-quizz-card',
  templateUrl: './quizz-card.component.html',
  styleUrls: ['./quizz-card.component.scss']
})

export class QuizzCardComponent implements OnInit {

  constructor() { }

  
  @Input() title: string = "";
  @Input() link: string = "";
  @Input() image: string = "";
  
  ngOnInit(): void {
  }

  quizzes = [
    {
      title: "Call center",
      link: "home-office",
      image: "./../../assets/images/call-center.svg"
    },
    {
      title: "Take a break",
      link: "home-office",
      image: "./../../assets/images/take-a-brake.svg"
    },
    {
      title: "Home office",
      link: "home-office",
      image: "./../../assets/images/home-office.svg"
    }
  ]


}
