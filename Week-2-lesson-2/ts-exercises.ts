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