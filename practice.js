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
