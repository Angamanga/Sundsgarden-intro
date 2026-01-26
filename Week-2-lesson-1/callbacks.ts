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