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
