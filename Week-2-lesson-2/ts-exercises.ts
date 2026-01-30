// 1. Union Types

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

// Exercise 3: 
type Result = boolean;

const printResult = (result: Result): void => {
    result ? console.log("Pass") : console.log("Fail");
};

printResult(true);
printResult(false);

// 2. Interfaces and Type Aliases

// Exercise 1: 
interface Book {
    title: string;
    pages: number;
}

const describeBook = (book: Book): void => {
    console.log(`The book ${book.title} has ${book.pages} pages`);
};

describeBook({ title: "Careless People, a story of where I used to work", pages: 400 });

// Exercise 2: 
interface Teacher {
    name: string;
    subject: string;
}

interface Employee {
    id: number;
    email: string;
}

type SchoolTeacher = Teacher & Employee;

const printTeacherInfo = (schoolTeacher: SchoolTeacher): void => {
    for (const [key, value] of Object.entries(schoolTeacher)) {
        console.log(`- ${key}: ${value}`);
    }
};

const teacher = {
    name: "Joan",
    subject: "Maths",
    id: 22,
    email: "joan@example.com"
};

printTeacherInfo(teacher);

// Exercise 3: 
interface Car {
    brand: string;
    year: number;
}

const printCar = (car: Car): void => {
    const { brand, year } = car;
    console.log(`Brand: ${brand}, Year: ${year}`);
};

printCar({ brand: "Subaru Vortex", year: 1989 });

// 3. Enums

// Exercise 1: 
enum Color {
    Red = "Red",
    Green = "Green",
    Blue = "Blue"
}

const showColor = (color: Color): void => {
    console.log(`You choose ${color}`);
};

showColor(Color.Red);

// Exercise 2: 
enum PizzaSize { 
    Small = "Small",
    Medium = "Medium",
    Large =  "Large"
};

const orderPizza = (size: PizzaSize): void => {
    console.log(`You ordered a ${size} pizza.`);
};

orderPizza(PizzaSize.Large);

// Exercise 3: 
enum Role {
    Admin = "admin",
    User = "user",
    Guest = "guest"
}

const printRole = (role: Role): void => {
    switch (role) {
        case Role.Admin:
            console.log("You have full access");
            break;
        case Role.User:
            console.log("You have limited access");
            break;
        case Role.Guest:
            console.log("You have guest access");
            break;
    }
};

printRole(Role.Guest);
printRole(Role.Admin);


// 4. Generics

// Exercise 1: 
const wrapInArray = <T>(item: T): T[] => {
    return [item];
};

console.log(wrapInArray("An apple"));
console.log(wrapInArray(45));
console.log(wrapInArray(true));

// Exercise 2: 
const firstItem = <T>(items: T[]): T | undefined => {
    return items[0];
}

console.log(firstItem([1, 2, 3]));
console.log(firstItem(["a", "b", "c"]));
console.log(firstItem([]));
 