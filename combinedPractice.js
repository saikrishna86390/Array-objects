//Array of objects
const movies = [
  {
    movName: "dhruva",
    heroName: "Ramcharan",
    ticketPrice: 200,
  },
  {
    movName: "Daku",
    heroName: "Balaybabu",
    ticketPrice: 300,
  },
];
console.log(movies);
console.log(movies[1].movName);
//iwant to call particular index value with object we call like this ,for example we want to call  arayy call with square notation,we want to call object call with dot notation

//TASK-1:
const students = [
  { name: "Saikrishna", age: 26, grade: "A" },
  { name: "Chandu", age: 25, grade: "F" },
  { name: "Kalyan", age: 21, grade: "K" },
];
console.log(students);

//TASK-2
const mobiles = [
  { brand: "nokia", price: "20000", color: "red" },
  { brand: "Samsung", price: "35000", color: "yellow" },
  { brand: "Iphone", price: "200000", color: "pink" },
];
console.log(mobiles[2].price);

//Here iam taking one empty array then add objects

const practice = [];
practice.push({ brand: "nothing", price: "40000", color: "black" });
console.log(practice);
