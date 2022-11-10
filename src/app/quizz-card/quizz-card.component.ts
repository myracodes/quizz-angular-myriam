import { Component, Input, OnInit } from '@angular/core';

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

}
