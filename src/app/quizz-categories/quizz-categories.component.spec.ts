import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzCategoriesComponent } from './quizz-categories.component';

describe('QuizzCategoriesComponent', () => {
  let component: QuizzCategoriesComponent;
  let fixture: ComponentFixture<QuizzCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizzCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizzCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
