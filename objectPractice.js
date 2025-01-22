//MOVIE OBJECT
const movie1 = {
  name: "Avatar",
  price: 200,
  language: "English",
};
//MOVIE OBJECT WITH DOT NOTATION
const movie2 = {};
movie2.name = "Batman";
movie2.price = 180;
movie2.language = "Hindi";
movie2.theater = "s2multiplex"; //here iam adding another key value
console.log(movie2);
//MOVIE OBJECT WITH SQUARE NOTATION
const movie3 = {};
movie3["name"] = "Superman";
movie3["price"] = 220;
movie3["language"] = "Telugu";

// Task 1: Create a student object with above ways:
const student = {
  name: "saikrishna",
  age: 26,
  grade: "A",
};
console.log(student);

const acters = {};
acters.pushpe = "Bunnny";
acters.gameChanger = "rancharan";
acters.daku = "balaya";
console.log(acters);

const bikes = {};
bikes["company"] = "Yamaha";
bikes["speed"] = "150kmpl";
bikes["color"] = "red";
console.log(bikes);

// Task 2: Create a mobile phone object with:
const mobilePhone = {
  brand: "samsung",
  price: 22000,
  color: "red",
};
console.log(mobilePhone);

const mobilePhone1 = {};
(mobilePhone1.brand = "samsung"),
  (mobilePhone1.price = "2200"),
  (mobilePhone1.color = "green");
console.log(mobilePhone1);

const mobilePhone2 = {};
mobilePhone2["brand"] = "nokia";
mobilePhone2["price"] = "59000";
mobilePhone2["color"] = "red";
console.log(mobilePhone2);
