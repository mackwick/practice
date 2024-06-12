// const users = [
//   {
//     id: 1,
//     name: "John Doe",
//     email: "johndoe@example.com",
//     profilePicture: "https://picsum.photos/200/300?image=1027",
//     bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac quam id enim semper congue.",
//   },
//   {
//     id: 2,
//     name: "Jane Smith",
//     email: "janesmith@example.com",
//     profilePicture: "https://picsum.photos/200/300?image=1028",
//     bio: "Fusce semper augue eget quam semper, eget tincidunt quam rhoncus.",
//   },
//   {
//     id: 3,
//     name: "Peter Jones",
//     email: "peterjones@example.com",
//     profilePicture: "https://picsum.photos/200/300?image=1029",
//     bio: "Donec ac enim eget enim posuere tincidunt.",
//   },
//   {
//     id: 4,
//     name: "Mary Brown",
//     email: "marybrown@example.com",
//     profilePicture: "https://picsum.photos/200/300?image=1030",
//     bio: "Sed ut enim vel enim luctus tincidunt.",
//   },
//   {
//     id: 5,
//     name: "David Williams",
//     email: "davidwilliams@example.com",
//     profilePicture: "https://picsum.photos/200/300?image=1031",
//     bio: "Nullam nec ligula ac eros aliquam auctor.",
//   },
//   {
//     id: 6,
//     name: "Sarah Miller",
//     email: "sarahmiller@example.com",
//     profilePicture: "https://picsum.photos/200/300?image=1032",
//     bio: "Donec ut enim vitae quam vehicula hendrerit.",
//   },
//   {
//     id: 7,
//     name: "Michael Davis",
//     email: "michaeldavis@example.com",
//     profilePicture: "https://picsum.photos/200/300?image=1033",
//     bio: "Sed ut quam eget neque convallis faucibus.",
//   },
//   {
//     id: 8,
//     name: "Patricia Wilson",
//     email: "patriciawilson@example.com",
//     profilePicture: "https://picsum.photos/200/300?image=1034",
//     bio: "Donec sed eros non enim laoreet laoreet.",
//   },
//   {
//     id: 9,
//     name: "James Taylor",
//     email: "jamestaylor@example.com",
//     profilePicture: "https://picsum.photos/200/300?image=1035",
//     bio: "Nullam semper quam non dui semper, in aliquam leo semper.",
//   },
//   {
//     id: 10,
//     name: "Susan Anderson",
//     email: "susananderson@example.com",
//     profilePicture: "https://picsum.photos/200/300?image=1036",
//     bio: "Donec nec quam eget ipsum egestas semper.",
//   },
// ];

// // Using the array above loop over each user
// // generate a div and put the users info in the div -- add an HTML w/ boilerplate and a <div> with the id "users"
// // using whatever html you think works best

// const usersDiv = document.querySelector("#user-div");

// users.forEach((user) => {
//   const newDiv = document.createElement("div");

//   newDiv.innerHTML = `
//   <h1>${user.name}</h1>
//   <img src="${user.profilePicture}"/>
//   <h2>${user.email}</h2>
//   <p>${user.bio}</p>`;

//   usersDiv.append(newDiv);
// });

//Given this array:

// const instructionalTeam = ["Alex", "David", "Kyle", "Joy"];

// //Write a FOR OF loop that logs the name of each instructionalTeam member

// for (let instructor of instructionalTeam) {
//   console.log(instructor);
// }

//Write code that logs "Love me, pet me! HSSSSSS!" 20 times, but for every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.

// const options = [
//   "...human...why you taking pictures of me?...",
//   "...the catnip made me do it...",
//   "...why does the red dot always get away...",
// ];

// for (let i = 1; i < 21; i++) {
//   const rando = options[Math.floor(Math.random() * 2)];
//   if (i % 2 === 0) {
//     console.log(rando);
//   } else {
//     console.log("Love me, pet me! HSSSS!");
//   }
// }

// const dogs = [
//   {
//     age: 5,
//     breed: "Labrador Retriever",
//     name: "Buddy",
//     birthdate: "2018-03-08",
//     isNeutered: true,
//   },
//   {
//     age: 2,
//     breed: "Golden Retriever",
//     name: "Charlie",
//     birthdate: "2021-06-01",
//     isNeutered: false,
//   },
//   {
//     age: 3,
//     breed: "German Shepherd",
//     name: "Max",
//     birthdate: "2020-08-15",
//     isNeutered: true,
//   },
//   {
//     age: 1,
//     breed: "Poodle",
//     name: "Bella",
//     birthdate: "2022-01-25",
//     isNeutered: false,
//   },
//   {
//     age: 4,
//     breed: "Bulldog",
//     name: "Henry",
//     birthdate: "2019-05-12",
//     isNeutered: true,
//   },
//   {
//     age: 6,
//     breed: "Beagle",
//     name: "Lucy",
//     birthdate: "2017-09-22",
//     isNeutered: true,
//   },
//   {
//     age: 7,
//     breed: "Yorkshire Terrier",
//     name: "Molly",
//     birthdate: "2016-12-31",
//     isNeutered: false,
//   },
//   {
//     age: 8,
//     breed: "Chihuahua",
//     name: "Oscar",
//     birthdate: "2015-03-08",
//     isNeutered: true,
//   },
//   {
//     age: 9,
//     breed: "Dachshund",
//     name: "Sadie",
//     birthdate: "2014-06-01",
//     isNeutered: false,
//   },
//   {
//     age: 10,
//     breed: "Corgi",
//     name: "Tessa",
//     birthdate: "2013-08-15",
//     isNeutered: true,
//   },
// ];
// // loop over the dogs array and log any dog that is neutered only

// const neuteredDogs = dogs.filter((dog) => dog.isNeutered === true);
// console.log(neuteredDogs);

// USING THE FOLLOWING ARRAY
// const dogs = [
//   {
//     age: 5,
//     breed: "Labrador Retriever",
//     name: "Buddy",
//     birthdate: "2018-03-08",
//     isNeutered: true,
//   },
//   {
//     age: 2,
//     breed: "Golden Retriever",
//     name: "Charlie",
//     birthdate: "2021-06-01",
//     isNeutered: false,
//   },
//   {
//     age: 3,
//     breed: "German Shepherd",
//     name: "Max",
//     birthdate: "2020-08-15",
//     isNeutered: true,
//   },
//   {
//     age: 1,
//     breed: "Poodle",
//     name: "Bella",
//     birthdate: "2022-01-25",
//     isNeutered: false,
//   },
//   {
//     age: 4,
//     breed: "Bulldog",
//     name: "Henry",
//     birthdate: "2019-05-12",
//     isNeutered: true,
//   },
//   {
//     age: 6,
//     breed: "Beagle",
//     name: "Lucy",
//     birthdate: "2017-09-22",
//     isNeutered: true,
//   },
//   {
//     age: 7,
//     breed: "Yorkshire Terrier",
//     name: "Molly",
//     birthdate: "2016-12-31",
//     isNeutered: false,
//   },
//   {
//     age: 8,
//     breed: "Chihuahua",
//     name: "Oscar",
//     birthdate: "2015-03-08",
//     isNeutered: true,
//   },
//   {
//     age: 9,
//     breed: "Dachshund",
//     name: "Sadie",
//     birthdate: "2014-06-01",
//     isNeutered: false,
//   },
//   {
//     age: 10,
//     breed: "Corgi",
//     name: "Tessa",
//     birthdate: "2013-08-15",
//     isNeutered: true,
//   },
// ];
// // loop over the dogs array and log the name and breed

// dogs.forEach((dog) => {
//   console.log(`name: ${dog.name}, breed: ${dog.breed}`);
// });

//Write a JS route that sends a GET request to the root url (assuming const app = express() already exists).
// app.get("/", (req, res) => {
//   res.send("<h1>This is the root</h1>");
// });

// console.log only the profession of each person
// const peopleArray = [
//   {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
//     profession: "Software Engineer",
//   },
//   {
//     firstName: "Jane",
//     lastName: "Smith",
//     age: 25,
//     profession: "Graphic Designer",
//   },
//   {
//     firstName: "Michael",
//     lastName: "Johnson",
//     age: 40,
//     profession: "Data Scientist",
//   },
//   {
//     firstName: "Emily",
//     lastName: "Williams",
//     age: 35,
//     profession: "Marketing Specialist",
//   },
//   {
//     firstName: "Daniel",
//     lastName: "Brown",
//     age: 28,
//     profession: "UX/UI Designer",
//   },
//   {
//     firstName: "Olivia",
//     lastName: "Davis",
//     age: 32,
//     profession: "Financial Analyst",
//   },
//   { firstName: "William", lastName: "Jones", age: 45, profession: "Architect" },
//   { firstName: "Sophia", lastName: "Moore", age: 27, profession: "Teacher" },
//   {
//     firstName: "Ethan",
//     lastName: "Miller",
//     age: 38,
//     profession: "Project Manager",
//   },
//   {
//     firstName: "Ava",
//     lastName: "Wilson",
//     age: 33,
//     profession: "Medical Doctor",
//   },
// ];

// peopleArray.forEach((person) => {
//   console.log(person.profession);
// });

//JS to split a string (str) into individual letters?

// const str = "i am a string";
// const splitString = str.split("");
// console.log(splitString);

// What JS would you use to add a variable newElement to the end of the body?
// const newElement = document.createElement("h3");
// newElement.innerText = "hiyee";
// const body = document.querySelector("body");
// body.append(newElement);

//Write JS to bring in an express library and create a variable that returns an express application object.
// const express = require("express");
// const app = express();

//Using the following HTML:
{
  /* <form>
<input type="text" name="username" placeholder="username">
<input type="password" name="password" placeholder="password">
<input type="submit" value="Create User">
</form>

console log the username and password */
}

// const form = document.querySelector("form");
// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const formData = new FormData(event.target);

//   const un = formData.get("username");
//   const pw = formData.get("password");

//   console.log(un, pw);
// });

//What six values are "falsey"?
//0, null, NaN, undefined, false, ""

//JS to round the variable "a" normally, up, or down
// Math.round(a);
// Math.ceil(a);
// Math.floor(a);

//what function can I use to alter the attributes of any node?
// const node = document.querySelector("div");
// node.setAttribute("class", "the-class");

// write code to use the array below to generate <li></li> for each number in the array listed in order (create HTML boilerplate and add an <ul> w/ a id of "first"
//<ul><li>1</li><li>2</li><li>3</li><li>4</li><li>1</li>5</ul>
// const arr = [1, 2, 3, 4, 5];
// const ul = document.getElementById("first");
// arr.forEach((num) => {
//   const li = document.createElement("li");
//   li.innerText = num;
//   ul.append(li);
// });

//How would you console log const a = '1' as an integer?
// const a = "1";
// console.log(parseInt(a));

// Create an h4 element with the text of Powered by JavaScript. Add that element to the end of the <body> of the document for this HTML:
// <h1 id="title">Welcome to the DOM</h1>
// <p>Don't feel <span class="blue">blue</span>, here's what to do.</p>
// const h4 = document.createElement("h4");
// h4.innerText = "Powered by JavaScript";
// const body = document.querySelector("body");
// body.append(h4);

// Write an object called "aboutMe" with your name, age, and cities you've lived in.
// const aboutMe = {
//   name: "Mack",
//   age: 500,
//   citiesILivedIn: [
//     "winston",
//     "rutherfordton",
//     "wilmington",
//     "boone",
//     "nyc",
//     "la",
//     "asheville",
//   ],
// };
//Use a for of loop to capitalize on each ninja turtle in this array and print out the result.
// let turtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

// for (let turtle of turtles) {
//   console.log(turtle.toUpperCase());
// }

// const peopleArray = [
//   {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
//     profession: "Software Engineer",
//   },
//   {
//     firstName: "Jane",
//     lastName: "Smith",
//     age: 25,
//     profession: "Graphic Designer",
//   },
//   {
//     firstName: "Michael",
//     lastName: "Johnson",
//     age: 40,
//     profession: "Data Scientist",
//   },
//   {
//     firstName: "Emily",
//     lastName: "Williams",
//     age: 35,
//     profession: "Marketing Specialist",
//   },
//   {
//     firstName: "Daniel",
//     lastName: "Brown",
//     age: 28,
//     profession: "UX/UI Designer",
//   },
//   {
//     firstName: "Olivia",
//     lastName: "Davis",
//     age: 32,
//     profession: "Financial Analyst",
//   },
//   { firstName: "William", lastName: "Jones", age: 45, profession: "Architect" },
//   { firstName: "Sophia", lastName: "Moore", age: 27, profession: "Teacher" },
//   {
//     firstName: "Ethan",
//     lastName: "Miller",
//     age: 38,
//     profession: "Project Manager",
//   },
//   {
//     firstName: "Ava",
//     lastName: "Wilson",
//     age: 33,
//     profession: "Medical Doctor",
//   },
// ];

//Use every to determine whether every person in the array is over the age of 30

// console.log(peopleArray.every((el) => el.age > 30));

// const peopleArray = [
//   {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
//     profession: "Software Engineer",
//   },
//   {
//     firstName: "Jane",
//     lastName: "Smith",
//     age: 25,
//     profession: "Graphic Designer",
//   },
//   {
//     firstName: "Michael",
//     lastName: "Johnson",
//     age: 40,
//     profession: "Data Scientist",
//   },
//   {
//     firstName: "Emily",
//     lastName: "Williams",
//     age: 35,
//     profession: "Marketing Specialist",
//   },
//   {
//     firstName: "Daniel",
//     lastName: "Brown",
//     age: 28,
//     profession: "UX/UI Designer",
//   },
//   {
//     firstName: "Olivia",
//     lastName: "Davis",
//     age: 32,
//     profession: "Financial Analyst",
//   },
//   { firstName: "William", lastName: "Jones", age: 45, profession: "Architect" },
//   { firstName: "Sophia", lastName: "Moore", age: 27, profession: "Teacher" },
//   {
//     firstName: "Ethan",
//     lastName: "Miller",
//     age: 38,
//     profession: "Project Manager",
//   },
//   {
//     firstName: "Ava",
//     lastName: "Wilson",
//     age: 33,
//     profession: "Medical Doctor",
//   },
// ];

//use some to determine whether just 1 person has the first name Olivia

// console.log(peopleArray.some((el) => el.firstName === "Olivia"));

// //Create <div id="practice"></div> and do the following using jQuery:
// // save the div.practice in a variables
// const $practice = $("#practice");
// // want you to change its background color to black
// $practice.css({ "background-color": "black", color: "white" });
// // change it's fond color to white
// // create a ul and append it to div.practice
// const $ul = $("<ul>");
// $practice.append($ul);
// // then create an li with the number 1 and append to ul
// const $li1 = $("<li>").text("1");
// $ul.append($li1);
// // then create an li with the number 5 and append to ul
// const $li5 = $("<li>").text("5");
// $ul.append($li5);
// // then create an li with the number 2 and put it in the correct spot
// const $li2 = $("<li>").text("2");
// $li1.after($li2);
// // then create an li with the number 4 put in the correct spot
// const $li4 = $("<li>").text("4");
// $li5.before($li4);
// // then create an li with the number 3 and put in the correct spot
// const $li3 = $("<li>").text("3");
// $li4.before($li3);

// function timeConversion(s) {
//   const newArr = [];
//   const splitS = s.split(":"); // [07, 05, 45PM]
//   const dayNight = splitS[2].split(""); // [4, 5, p, m]
//   const AorP = dayNight[dayNight.length - 2]; // a or p
//   const end = splitS[1] + ":" + dayNight[0] + dayNight[1];

//   if (splitS[0] < 12 && AorP === "A") {
//     newArr.push(splitS[0] + ":");
//     newArr.push(end);
//   } else if (splitS[0] < 12 && AorP === "P") {
//     newArr.push(parseInt(splitS[0]) + 12 + ":");
//     newArr.push(end);
//   } else if (splitS[0] === "12" && AorP === "P") {
//     newArr.push("12:");
//     newArr.push(end);
//   } else if (splitS[0] === "12" && AorP === "A") {
//     newArr.push("00:");
//     newArr.push(end);
//   }
//   console.log(newArr);
// }

// timeConversion("12:40:22AM");

// // save the div#practice in a variables
// const $div = $("#practice");
// // want you to change its background color to black and it's fond color to white
// $div.css({ "background-color": "black", color: "white" });
// // create a ul and append it to div.practice
// const $ul = $("<ul>");
// $div.append($ul);
// // then create an li with the number 1 and append to ul
// const $li1 = $("<li>").text("1");
// $ul.append($li1);
// // then create an li with the number 5 and append to ul
// const $li5 = $("<li>").text("5");
// $ul.append($li5);
// // then create an li with the number 2 and put it in the correct spot
// const $li2 = $("<li>").text("2");
// $li1.after($li2);
// // then create an li with the number 4 put in the correct spot
// const $li4 = $("<li>").text("4");
// $li5.before($li4);
// // then create an li with the number 3 and put in the correct spot
// const $li3 = $("<li>").text("3");
// $li2.after($li3);

// for the following array of objects:
// const students = [
//   {
//     id: 1,
//     name: "Alice Smith",
//     email: "alice.smith@example.com",
//     major: "Computer Science",
//   },
//   {
//     id: 2,
//     name: "Bob Jones",
//     email: "bob.jones@example.com",
//     major: "Mathematics",
//   },
//   {
//     id: 3,
//     name: "Carol Williams",
//     email: "carol.williams@example.com",
//     major: "English",
//   },
//   {
//     id: 4,
//     name: "Dave Miller",
//     email: "dave.miller@example.com",
//     major: "History",
//   },
//   {
//     id: 5,
//     name: "Emily Brown",
//     email: "emily.brown@example.com",
//     major: "Biology",
//   },
//   {
//     id: 6,
//     name: "Frank Garcia",
//     email: "frank.garcia@example.com",
//     major: "Chemistry",
//   },
//   {
//     id: 7,
//     name: "Grace Anderson",
//     email: "grace.anderson@example.com",
//     major: "Physics",
//   },
//   {
//     id: 8,
//     name: "Henry Davis",
//     email: "henry.davis@example.com",
//     major: "Political Science",
//   },
//   {
//     id: 9,
//     name: "Isabella Johnson",
//     email: "isabella.johnson@example.com",
//     major: "Economics",
//   },
//   {
//     id: 10,
//     name: "Jack Wilson",
//     email: "jack.wilson@example.com",
//     major: "Philosophy",
//   },
// ];

// write a for of loop that creates and logs variable html, which is an html <div> with <h1>= name; <h2>= major; <h3>=email and uses interpolation to pull the info from the array

// for (let student of students) {
//   const html = `<div>
//     <h1>${student.name}</h1>
//     <h2>${student.major}</h2>
//     <h2>${student.email}</h2>
//     </div>`;
//   console.log(html);
// }

// Use a while loop to count down the daysUntilTheFinale of your favorite show, starting at 30 days. For each day, log the message "Only ______ more days!" by filling in the value of daysUntilTheFinale in the blank. Stop the countdown once daysUntiltheFinale reaches 0, then log the message "It's finally here!".
// Your first message should be "Only 30 more days!" and it should log down to "Only 1 more days!".

// let daysUntilTheFinale = 30;

// while (daysUntilTheFinale >= 0) {
//   if (daysUntilTheFinale > 0) {
//     console.log(`Only ${daysUntilTheFinale} more days!`);
//     daysUntilTheFinale = daysUntilTheFinale - 1;
//   } else {
//     console.log("It's finally here!");
//     daysUntilTheFinale = daysUntilTheFinale - 1;
//   }
// }

// This is a classic problem that you should get really comfortable solving. If you've solved it before, try to make it more elegant and short.
// Write a javascript application that logs all numbers from 1 - 100.
// If a number is divisible by 3 log "Fizz" instead of the number.
// If a number is divisible by 5 log "Buzz" instead of the number.
// If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.

// for (let i = 1; i < 100; i++) {
//   let fizz = i % 3;
//   let buzz = i % 5;

//   if (fizz === 0 && buzz === 0) {
//     console.log("FizzBuzz");
//   } else if (fizz === 0) {
//     console.log("Fizz");
//   } else if (buzz === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// const peopleArray = [
//   {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
//     profession: "Software Engineer",
//   },
//   {
//     firstName: "Jane",
//     lastName: "Smith",
//     age: 25,
//     profession: "Graphic Designer",
//   },
//   {
//     firstName: "Michael",
//     lastName: "Johnson",
//     age: 40,
//     profession: "Data Scientist",
//   },
//   {
//     firstName: "Emily",
//     lastName: "Williams",
//     age: 35,
//     profession: "Marketing Specialist",
//   },
//   {
//     firstName: "Daniel",
//     lastName: "Brown",
//     age: 28,
//     profession: "UX/UI Designer",
//   },
//   {
//     firstName: "Olivia",
//     lastName: "Davis",
//     age: 32,
//     profession: "Financial Analyst",
//   },
//   { firstName: "William", lastName: "Jones", age: 45, profession: "Architect" },
//   { firstName: "Sophia", lastName: "Moore", age: 27, profession: "Teacher" },
//   {
//     firstName: "Ethan",
//     lastName: "Miller",
//     age: 38,
//     profession: "Project Manager",
//   },
//   {
//     firstName: "Ava",
//     lastName: "Wilson",
//     age: 33,
//     profession: "Medical Doctor",
//   },
// ];

// //use reduce to concatenate everyone's first name

// console.log(peopleArray.reduce((x, y) => x + y.firstName, ""));

// for the following array of objects:
// const students = [
//   {
//     id: 1,
//     name: "Alice Smith",
//     email: "alice.smith@example.com",
//     major: "Computer Science",
//   },
//   {
//     id: 2,
//     name: "Bob Jones",
//     email: "bob.jones@example.com",
//     major: "Mathematics",
//   },
//   {
//     id: 3,
//     name: "Carol Williams",
//     email: "carol.williams@example.com",
//     major: "English",
//   },
//   {
//     id: 4,
//     name: "Dave Miller",
//     email: "dave.miller@example.com",
//     major: "History",
//   },
//   {
//     id: 5,
//     name: "Emily Brown",
//     email: "emily.brown@example.com",
//     major: "Biology",
//   },
//   {
//     id: 6,
//     name: "Frank Garcia",
//     email: "frank.garcia@example.com",
//     major: "Chemistry",
//   },
//   {
//     id: 7,
//     name: "Grace Anderson",
//     email: "grace.anderson@example.com",
//     major: "Physics",
//   },
//   {
//     id: 8,
//     name: "Henry Davis",
//     email: "henry.davis@example.com",
//     major: "Political Science",
//   },
//   {
//     id: 9,
//     name: "Isabella Johnson",
//     email: "isabella.johnson@example.com",
//     major: "Economics",
//   },
//   {
//     id: 10,
//     name: "Jack Wilson",
//     email: "jack.wilson@example.com",
//     major: "Philosophy",
//   },
// ];

// // write a for of loop that creates a table of information for students majoring in philosophy

// for (let student of students) {
//   if (student.major === "Philosophy") {
//     console.table(student);
//   }
// }

// // With the following array, remove Eggbert:
// const whereIsWaldo = [
//   ["Timmy", "Frank"],
//   "Eggbert",
//   ["Lucinda", "Jacc", "Neff", "Snoop"],
//   ["Petunia", ["Baked Goods", "Waldo"]],
// ];

// whereIsWaldo.splice(1, 1);
// console.log(whereIsWaldo);

//How would you log "blue" using this function that returns an object?
// const summonBird = () => {
//   return {
//     color: "blue",
//   };
// };

// console.log(summonBird().color);

// With the following array, replace "Neff" with "No one":
// const whereIsWaldo = [
//   ["Timmy", "Frank"],
//   "Eggbert",
//   ["Lucinda", "Jacc", "Neff", "Snoop"],
//   ["Petunia", ["Baked Goods", "Waldo"]],
// ];

// whereIsWaldo[2][2] = "No One";
// console.log(whereIsWaldo);

// const users = [
//   {
//     id: 1,
//     name: "John Doe",
//     email: "johndoe@example.com",
//     profilePicture: "https://picsum.photos/200/300?image=1027",
//     bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac quam id enim semper congue.",
//   },
//   {
//     id: 2,
//     name: "Jane Smith",
//     email: "janesmith@example.com",
//     profilePicture: "https://picsum.photos/200/300?image=1028",
//     bio: "Fusce semper augue eget quam semper, eget tincidunt quam rhoncus.",
//   },
//   {
//     id: 3,
//     name: "Peter Jones",
//     email: "peterjones@example.com",
//     profilePicture: "https://picsum.photos/200/300?image=1029",
//     bio: "Donec ac enim eget enim posuere tincidunt.",
//   },
//   {
//     id: 4,
//     name: "Mary Brown",
//     email: "marybrown@example.com",
//     profilePicture: "https://picsum.photos/200/300?image=1030",
//     bio: "Sed ut enim vel enim luctus tincidunt.",
//   },
//   {
//     id: 5,
//     name: "David Williams",
//     email: "davidwilliams@example.com",
//     profilePicture: "https://picsum.photos/200/300?image=1031",
//     bio: "Nullam nec ligula ac eros aliquam auctor.",
//   },
//   {
//     id: 6,
//     name: "Sarah Miller",
//     email: "sarahmiller@example.com",
//     profilePicture: "https://picsum.photos/200/300?image=1032",
//     bio: "Donec ut enim vitae quam vehicula hendrerit.",
//   },
//   {
//     id: 7,
//     name: "Michael Davis",
//     email: "michaeldavis@example.com",
//     profilePicture: "https://picsum.photos/200/300?image=1033",
//     bio: "Sed ut quam eget neque convallis faucibus.",
//   },
//   {
//     id: 8,
//     name: "Patricia Wilson",
//     email: "patriciawilson@example.com",
//     profilePicture: "https://picsum.photos/200/300?image=1034",
//     bio: "Donec sed eros non enim laoreet laoreet.",
//   },
//   {
//     id: 9,
//     name: "James Taylor",
//     email: "jamestaylor@example.com",
//     profilePicture: "https://picsum.photos/200/300?image=1035",
//     bio: "Nullam semper quam non dui semper, in aliquam leo semper.",
//   },
//   {
//     id: 10,
//     name: "Susan Anderson",
//     email: "susananderson@example.com",
//     profilePicture: "https://picsum.photos/200/300?image=1036",
//     bio: "Donec nec quam eget ipsum egestas semper.",
//   },
// ];

// Using the array below loop over each user
// generate a div and put the users info in the div -- add an HTML w/ boilerplate and a <div> with the id "users"
// using whatever html you think works best

// let div = document.querySelector("#practice");

// users.forEach((user) => {
//   let newDiv = document.createElement("div");
//   newDiv.innerHTML = `<h1>${user.name} - ${user.id}</h1>
//   <img src="${user.profilePicture}">
//   <h2>email: ${user.email}</h2>
//   <p>bio: ${user.bio}</p>`;
//   div.append(newDiv);
// });

//Write JS to turn on a server listener on port 3000 (assuming const app = express()).
//app.listen(3000, () => {
//   console.log("I'm listening on 3000")
// })
