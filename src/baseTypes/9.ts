/*
  Створіть новий тип даних, який підходить для цих двох об'єктів.
*/
type pages = { [key: string]: any };

// type Details = {
//   createAt: Date,
//     updateAt: Date,
// }

// type Page = {
//   title: string,
//   likes: number,
//   accounts: string[],
//   status: 'open' | 'close',
//   details?: Details
// }

const page1: pages = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: new Date("2021-01-01"),
    updateAt: new Date("2021-05-01"),
  },
};

const page2: pages = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};

export {};
