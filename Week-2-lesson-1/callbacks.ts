// 1) Hello Callback 
type DisplayGreeting = (greeting: string) => void

const hello = (displayGreeting: DisplayGreeting): void => {
    const greeting = "Hello from callback!";
    displayGreeting(greeting);
}

const displayGreeting = (greeting: string): void => {
    console.log(greeting);
}

hello(displayGreeting);


// 2) Delayed Greeting 
const delayedHello = (displayGreeting: DisplayGreeting): void => {
    setTimeout(() => {
        const greeting = "Hi, I am late!";
        displayGreeting(greeting);
    }, 2000);
};

delayedHello(displayGreeting);

// 3) Math Callback 
type DisplayResult = (result: number) => void;

const addNumbers = (a: number, b: number, displayResult: DisplayResult): void => {
    const result = a + b;
    displayResult(result);
}

const displayResult = (result: number): void => {
    console.log(`The result is: ${result}`);
}

addNumbers(21, 55, displayResult);

// 4) Uppercase Callback 
type GetString = (text: string) => string;

const makeUpperCase = (text: string, getString: GetString): string => {
    const upperCaseText = text.toUpperCase();
    return getString(upperCaseText);
}

const getString = (text: string): string => {
    return text;
}

console.log(makeUpperCase("Hi I am about to get uppercased", getString));

// 5) Pizza Order 
type PizzaStatus = (status: string) => void;

const orderPizza = (pizzaStatus: PizzaStatus): void => {
    setTimeout(() => {
        pizzaStatus("Your pizza is ready!!");
    }, 3000);
};

const pizzaStatus = (status: string): void => {
    console.log(status);
};

orderPizza(pizzaStatus);
