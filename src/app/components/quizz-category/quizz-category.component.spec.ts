import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzCategoryComponent } from './quizz-category.component';

describe('QuizzCategoriesComponent', () => {
  let component: QuizzCategoryComponent;
  let fixture: ComponentFixture<QuizzCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizzCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizzCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
