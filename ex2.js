/*
Write the parseDateIfValid function.
It should receive one argument, which is the date we want to parse.
It should return a valid Date object if the provided date is valid.
It should throw an error if the provided date is not valid.

*/

function parseDateIfValid(date) {
    const parsedDate = new Date(date);

    if (isNaN(parsedDate.getTime())) {
        throw new Error("Invalid date format");
    }

    return parsedDate;
}

parseDateIfValid("2024-02-28T02:33:33.210Z"); // <- valid
parseDateIfValid("2024-ABC"); // <- invalid
parseDateIfValid(1709087704751); // <- valid