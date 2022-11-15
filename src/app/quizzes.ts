
export interface IQuizz {
    title: string,
    link: string,
    image: string
}

export const quizzes: IQuizz[] = [
    {
      title: "Call center",
      link: "/home-office",
      image: "./../../assets/images/call-center.svg"
    },
    {
      title: "Take a break",
      link: "/home-office",
      image: "./../../assets/images/take-a-brake.svg"
    },
    {
      title: "Home office",
      link: "/home-office",
      image: "./../../assets/images/home-office.svg"
    }
  ]