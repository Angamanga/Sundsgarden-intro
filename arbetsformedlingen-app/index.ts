// A function that searches for jobs
// A function that runs our app
// The command to start everything
import * as readline from "readline";

interface Job {
  headline: string;
  publication_date: string;
  employer: {
    name: string;
  };
  workplace_address: {
    municipality: string;
  };
}

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const searchJobs = async (keywords: string) => {
  try {
    const result = `https://jobsearch.api.jobtechdev.se/search?q=${keywords}&offset=0&limit=10`;
    const response = await fetch(result);
    const data = await response.json();

    console.log(`\nFound ${data.hits.length} jobs`);
    console.log("-".repeat(50));

    data.hits.forEach((job: Job, index: number) => {
      const pubDate = new Date(job.publication_date);
      // Experimenting with console.dir
      // console.dir(job.employer);
      // console.dir(job.workplace_address);
      console.log(`${index + 1}. ${job.headline}`);
      console.log(`Company: ${job.employer.name}`);
      console.log(`Location: ${job.workplace_address.municipality}`);
      console.log(`Publication: ${pubDate.toISOString().split("T")[0]}`);
      console.log("-".repeat(50));
    });
  } catch (error) {
    console.error(error);
  }
};

const runApp = async () => {
  try {
    console.log("Welcome to the Job Search App!");
    console.log("This app searches for jobs using JobTeach API");

    const keywords = await new Promise<string>((resolve) => {
      rl.question("What do you want to search for?", resolve);
    });

    // Formatting the the input to fit url-encoding-standards.
    const encodedKeywords = encodeURIComponent(keywords);
    console.log("Searching...");
    searchJobs(encodedKeywords);
    rl.close();
  } catch (error) {
    console.error(error);
  }
};

runApp();
