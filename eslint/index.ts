// Task 1

const greet = (firstName: string) => {
  return `Hello ${firstName}`;
};

greet("Student");

// Task 2

const double = (n: number) => {
  return n * 2;
};

console.log(`Five times 2 is equal to ${double(5)}`);

// Task 3

const isEven = (num: number) => {
  return num % 2 === 0;
};

console.log(`Is number 5 even? ${isEven(5)}`);

// Task 4

const square = (x: number) => {
  return x * x;
};

console.log(`The squareroot of 5 is: ${square(5)}`);

// Task 5

const getAge = (year: number) => {
  return 2026 - year;
};
console.log(`My age is: ${getAge(1978)}`);

// Task 6

const prices = [10, 20, 30];
let total = 0;
prices.forEach((p) => {
  return (total += p);
});

console.log(`The total price is: ${total}`);

// Task 7

// Sample Code (Fix this):

const user = { name: "John" };
const sayHi = () => {
  return console.log(`Hi ${user.name}`);
};

sayHi();

// Task 8
const colors = ["red", "blue"];
colors.forEach((c) => {
  return console.log(`Color: ${c}`);
});

// Task 9

const items = [1, 2, 3];
const doubled = items.map((i) => {
  return i * 2;
});

console.log(`The doubled items are: ${doubled}`);

// Task 10

const checkAuth = (user: { isAdmin: boolean }) => {
  return user.isAdmin;
};

console.log(`Am I an admin? ${checkAuth({ isAdmin: false })}`);

// Task 11

import fs from "fs";
const read = async (path: string) => {
  try {
    const d = await fs.promises.readFile(path, "utf-8");
    console.log(d);
  } catch (error) {
    console.log(error);
  }
};
read("./file.txt");

// Task 12

const getData = async (url: string) => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log(`Oh no an error!! ${error}`);
  }
};

const myPokemon = await getData("https://pokeapi.co/api/v2/pokemon/rapidash");
console.log(`My favourite pokemon is ${myPokemon.forms[0].name}`);

// Task 13

const process = (data: number[]): number[] => {
  return data
    .filter((x) => {
      return x > 10;
    })
    .map((x) => {
      return x * 2;
    });
};

console.log(process([1, 2, 3]));

// Task 14

const timer = (ms: number): Promise<void> => {
  return new Promise((res) => {
    return setTimeout(res, ms);
  });
};

const asyncTimer = async (ms: number) => {
  try {
    console.log(`I'm waiting for ${ms} milliseconds`);
    await timer(ms);
    console.log(`${ms} milliseconds has now passed`);
  } catch (error) {
    console.log(error);
  }
};

asyncTimer(2000);

// Task 15

const logErr = (m: string) => {
  // Logging error to the console
  return console.error(`Error: ${m}`);
};

logErr("Oh no I am an error!");
// Post the link to your assignment here:
