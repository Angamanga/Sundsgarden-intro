// Create your own promise
type Gesture = "sten" | "sax" | "pase";

const playGame = (gesture: Gesture): Promise<string> => {
    return new Promise((resolve, reject) => {
        const gestures: Gesture[] = ["sten", "sax", "pase"];
        const computerGesture = gestures[Math.floor(Math.random() * gestures.length)];

        switch (gesture) {
            case "sten":
                if (computerGesture === "sax") {
                    resolve("You won!");
                } else if (computerGesture === "pase") {
                    reject("You lost");
                } else {
                    resolve("Tie!!");
                }
                break;
            case "pase":
                if (computerGesture === "sten") {
                    resolve("You won!");
                } else if (computerGesture === "sax") {
                    reject("You lost");
                } else {
                    resolve("Tie!!");
                }
                break;
            case "sax":
                if (computerGesture === "pase") {
                    resolve("You won!");
                } else if (computerGesture === "sten") {
                    reject("You lost");
                } else {
                    resolve("Tie!!");
                }
                break;
            default:
                reject("You must choose sten, sax or pase");
        }
    });
};

// Testing the game!
playGame("sax").then(response=>{
    console.log(response)
}).catch(error=>{
    console.log(error);
});

playGame("pase").then(response=>{
    console.log(response)
}).catch(error=>{
    console.log(error);
});

playGame("blaha").then(response=>{
    console.log(response)
}).catch(error=>{
    console.log(error);
});