import { ICategory } from "./shared/models/quizz-category";

export const categories: ICategory[] = [
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