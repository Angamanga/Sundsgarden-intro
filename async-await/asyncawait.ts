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

// Part 2: Fetching Data from an API with Async/Await  

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

// Fetching data from an API, using async/await
const fetchWeather = async () => {
    console.log("Fetching weather....");
    try {
        const response = await fetch('https://www.7timer.info/bin/astro.php?lon=129.7319787&lat=62.0274078&ac=0&unit=metric&output=json&tzshift=0')
        const data = await response.json()
        // Getting a human readable date out of the initial time-stamp
        let date = parseInitialTime(data.init);
        // Adding the offset for the first forecast
        date.setUTCHours(date.getUTCHours() + data.dataseries[0].timepoint);
        console.log(`The weather in Yakutsk at ${date} was ${data.dataseries[0].temp2m} degrees Celcius`);
    } catch (error) {
          console.log("Oh no, something went wrong!\n");
            console.log(`Error-response: ${error}`);  
        };
};

fetchWeather();