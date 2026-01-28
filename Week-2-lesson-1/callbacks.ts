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

// 6) Multiple Messages 
type PrintMessage = (message: string) => void;

const threeMessages = (printMessage: PrintMessage): void => {
    const messages = ["Hi there!", "How are you?", "Where is the coffee?"];
    for (const message of messages) {
        printMessage(message);
    }
}
const printMessage = (message: string): void => {
    console.log(message);
}

threeMessages(printMessage);

// 7) Download Simulation 
type StatusReport = (report: string) => void;
const downloadFile = (url: string, callback: StatusReport): void => {
    console.log("Download started...");
    setTimeout(() => {
        callback(`Downloaded data from ${url}`);
    }, 2000);
}

const statusReport = (report: string): void => {
    console.log(report);
}

downloadFile("http://api.example.com", statusReport );

// 8) Success and Error Callback 
type ResponseHandler = (message: string) => void;

const errorOrNot = (successHandler: ResponseHandler, errorHandler: ResponseHandler): void => {
    // Checking if the random number between 1-100 is even or odd, then calling respective callback.
    const isEven = Math.floor((Math.random() * 100) + 1) % 2 === 0;
    if (isEven) {
        successHandler("Yay success!");
    } else {
        errorHandler("Oops we got an error!");
    }
};

const errorHandler = (message: string): void => {
    console.error(message);
};

const successHandler = (message: string): void => {
    console.log(message);    
};

errorOrNot(successHandler, errorHandler);