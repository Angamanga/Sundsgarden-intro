// Part 1: Refactoring Your Own Promise with Async/Await  
type Gesture = "sten" | "sax" | "pase";

const gamePromise = (gesture: Gesture): Promise<string> => {
    return new Promise((resolve, reject) => {
        const gestures: Gesture[] = ["sten", "sax", "pase"];
        const computerGesture = gestures[Math.floor(Math.random() * gestures.length)];
        const outcomes = {
            sten: { sax: "You won!", pase: "You lost", sten: "Tie!!" },
            pase: { sten: "You won!", sax: "You lost", pase: "Tie!!" },
            sax: { pase: "You won!", sten: "You lost", sax: "Tie!!" }
        };

        if (gesture in outcomes) {
            const result = outcomes[gesture][computerGesture];
            if (result === "You lost") {
                reject(result);
            } else {
                resolve(result);
            }
        } else {
            reject("You must choose sten, sax or pase");
        }
    });
};

const playGame = async (gesture: Gesture) => {
    try {
        const response = await gamePromise(gesture);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
};

// Testing the game!
playGame("sax");
playGame("pase");
playGame("blaha");
