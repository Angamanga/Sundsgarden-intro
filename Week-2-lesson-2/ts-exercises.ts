// Exercise 1: 
type IDType = number | string;

const showId = (id: IDType): void => {
    console.log(`Your ID is: ${id}`);
};

showId("mittidar123");
showId(2412412);