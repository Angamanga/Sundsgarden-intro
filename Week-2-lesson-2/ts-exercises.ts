// Exercise 1: 
type IDType = number | string;

const showId = (id: IDType): void => {
    console.log(`Your ID is: ${id}`);
};

showId("mittidar123");
showId(2412412);

// Exercise 2: 
type Fruit = "apple" | "banana" | "orange";

const eatFruit = (fruit: Fruit): void => {
    console.log(`You ate an ${fruit}`);
};

eatFruit("apple");
eatFruit("orange");