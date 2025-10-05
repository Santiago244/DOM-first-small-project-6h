const button = document.getElementById("changeColorButton");
const bootstrapColors = [
  "bg-primary",
  "bg-secondary",
  "bg-success",
  "bg-danger",
  "bg-warning",
  "bg-info",
  "bg-dark",
  "bg-transparent",
  // Blue (#007bff) // Gray (#6c757d) // Green (#28a745) // Red (#dc3545) // yellow (#ffc107) // Cyan (#17a2b8) // light gray (#f8f9fa) // dark gray (#343a40)
];
const boostrapFlex = [
  "justify-content-start",
  "justify-content-center",
  "justify-content-end",
];

const words = [
  "NASTIA",
  "MY LOVE",
  "MY QUEEN",
  "SHE IS THE BEST",
  "ANASTASIIA",
  "SHARDHORODSKA",
  "CLEVER GIRL",
  "LOVELY,",
  "BROWN EYES",
  "LIKES COFFEE",
];

function changeColor(bootstrapColors) {
  // Math.random returns a number between 0 and 1 if not specified,
  // multipying it by the length of the array gives a number between 0 and length of the array if 10 then, we will have
  let color = ["bg-example"];
  const randomColor =
    bootstrapColors[Math.floor(Math.random() * bootstrapColors.length)];
  let square = document.getElementById("styleMine");
  square.classList.remove(...bootstrapColors);
  square.classList.add(randomColor);
  color.splice(0, 1, randomColor);
  // Writting a random word into the circle.
  const randomWord = words[Math.floor(Math.random() * words.length)];
  square.innerHTML = `<b><i>${randomWord}</i></b>`;
  square.style.color = "";
}

button.addEventListener("click", () => changeColor(bootstrapColors));

function changeFlexPosition(boostrapFlex) {
  let container = document.getElementById("containerStyleMine");
  const randomFlex =
    boostrapFlex[Math.floor(Math.random() * boostrapFlex.length)];
  container.classList.remove(...boostrapFlex);
  container.classList.add(randomFlex);

  console.log(randomFlex);
}

button.addEventListener("click", () => changeFlexPosition(boostrapFlex));

// // --- IGNORE ---
// console.log("ARRAY");
// for (let fruit in fruits) {
//   console.log(fruit);
// }
// // ARRAYS
// let fruits = ["apple", "banana", "cherry", "mango", "lemon"];
// fruits.append("appened fruit (end)");
// fruits.unshift("appened fruit (start)");
// fruits.pop("removed fruit (end)");
// fruits.shift("removed fruit (start)");
// fruits.splice(
//   2,
//   1,
//   "deleted one element in the 2 index, third element, and added this one"
// );
// for (let fruit in fruits) {
//   console.log(fruit);
// }

// // List comprehension (Python style)
// let numbers = [1, 2, 3, 4, 5];
// let doubled = numbers.map((x) => x ** 2); // doubled = [x * 2 for x in numbers]; python equivalent
// doubled.forEach(console.log(numbers));

// // OBJECTS
// console.log("OBJECTS");

// let car = {
//   // Creating attributes to the object car.
//   brand: "Toyota",
//   model: "Corolla",
//   year: 2020,
//   color: "blue",
//   // Creating methods to the object car.
//   start: function () {
//     console.log("Car started");
//   },
// };
// // Access properties
// console.log(car.brand);
// console.log(car["model"]);

// // Creating new properties
// car.owner = "John Doe";
// car["licensePlate"] = "ABC-1234";

// let keys = Object.keys(car);
// for (let key in keys) {
//   console.log(key);
// }
// let values = Object.values(car);
// for (let value in values) {
//   console.log(value);
// }
// let entries = Object.entries(car);
// for (let entry in entries) {
//   console.log(entry);
// }
// let { brand, model, year, color } = car; // Destructuring
// console.log(brand, model, year, color);
// // call method
// car.start();

// // Sets
// let unique = new Set();
// unique.add(1);
// unique.add(2);
// unique.add(2);
// unique.add(3);
// unique.add(4);
// unique.delete(3);
// unique.has(3);
// console.log(unique);

// array = [...unique];
// console.log(array);

// // Maps

// let user = new Map();

// user.set("name", "John Doe");
// user.set("age", 30);
// user.set("email", "san@mia.com");

// console.log(user.get("name"));
// console.log(user);

// for (let [key, value] of user) {
//   console.log(
//     `${key}: ${value} this is the way of interaing maps, and f formating from python`
//   );
// }
