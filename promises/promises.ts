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

// Fetch and Handle Data
/* helper-function to extract the year, month, day and our out 
of the initial time set in the response, that is in the format
yyyymmddhh, and then convert it to a date
*/
const parseInitialTime = (initTime: string): Date => {
    const year = Number(initTime.slice(0, 4));
    const month = Number(initTime.slice(4, 6));
    const day = Number(initTime.slice(6, 8));
    const hour = Number(initTime.slice(8, 10));
    
    return new Date(Date.UTC(year, month - 1, day, hour));
};

// Fetching data from an API
fetch('https://www.7timer.info/bin/astro.php?lon=129.7319787&lat=62.0274078&ac=0&unit=metric&output=json&tzshift=0')
    .then((response) => response.json())
    .then((data) => {
        // Getting a human readable date out of the initial time-stamp
        let date = parseInitialTime(data.init);
        // Adding the offset for the first forecast
        date.setUTCHours(date.getUTCHours() + data.dataseries[0].timepoint);

        console.log(`The weather in Yakutsk at ${date} was ${data.dataseries[0].temp2m} degrees Celcius`);
    })
    .catch((err) => {
        console.log("Oh no, something went wrong!\n");
        console.log(`Error-response: ${err}`);
    });
