//Write an interface for a Person with a name that is a string, an age that is a number, and an optional email field that is a string

// interface Person {
//   name: String;
//   age: Number;
//   email?: String;
// }

//How would you declare an array (arr) with elements that can be either strings or numbers?

// const arr: Array<String | Number> = [1, "apple"];
// //or
// const arr2: (string | number)[ ] = [ ]

//Write a function that returns `${monthName} is ${checkSummer}`; using an enum of the months and case switch to check.
// enum Month {
//   Jan = 1,
//   Feb,
//   Mar,
//   Apr,
//   May,
//   Jun,
//   Jul,
//   Aug,
//   Sep,
//   Oct,
//   Nov,
//   Dec,
// }

// const isItSummer = (month: Month): String => {
//   let checkSummer: boolean = false;
//   if (month === Month.Jun || month === Month.Jul || month === Month.Aug) {
//     checkSummer = true;
//   }

//   return `${month} is ${checkSummer}`;
// };

//Write an interface for a Person with a name that is a string, an age that is a number, and an optional email field that is a string

// interface Person {
//   name: string;
//   age: number;
//   email?: string;
// }

//What is an enum in TS? Give an example.
//a set of options that cannot change - ex: months
//enum Month {jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec}

//How would you declare an array (arr) with elements that can be either strings or numbers?
// const arr: Array<string | number> = ["hi", 4];
// //or
// const arr2: (string | number)[] = ["yo", 5];

//Write a function that returns `${monthName} is ${checkSummer}`; using an enum of the months and case switch to check.
// enum Month {
//   Jan = 1,
//   Feb,
//   Mar,
//   Apr,
//   May,
//   Jun,
//   Jul,
//   Aug,
//   Sep,
//   Oct,
//   Nov,
//   Dec,
// }

// function checkSummer(month: Month): string {
//   let isSummer: boolean;
//   switch (month) {
//     case Month.Jun:
//     case Month.Jul:
//     case Month.Aug:
//       isSummer = true;
//       break;
//     default:
//       isSummer = false;
//       break;
//   }
//   return `${month} is summer is ${isSummer}`;
// }

//How would you declare an array (arr) with elements that can be either strings or numbers?
// const arr: (string | number)[] = [1, "apple"];

// Write an interface for a Person with a name that is a string, an age that is a number, and an optional email field that is a string
// interface Person {
//     name: string
//     age: number
//     email?: string
// }
