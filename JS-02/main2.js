function add7(x) {
    return x + 7;
}

function multiply(x, y) {
    return x * y;
}

function capitalize(inputString) {
    return (
        inputString.charAt(0).toUpperCase() +
        inputString.substring(1).toLowerCase()
    );
}

function lastLetter(inputString) {
    return inputString.charAt(inputString.length - 1);
}

let caseValue = 0;

let userInput = null;

const addSevenButton = document.getElementById("addSeven");
addSevenButton.addEventListener("click", () => {
    userInput = parseInt(prompt("Enter a number."));
    caseValue = 1;
    displayOutput(userInput, caseValue);
});

const multiplyTwoButton = document.getElementById("multiplyTwo");
multiplyTwoButton.addEventListener("click", () => {
    userInput = prompt("Enter two numbers, separated by comma.");
    console.log(userInput);
    caseValue = 2;
    displayOutput(userInput, caseValue);
});

const capitalizeButton = document.getElementById("capitalizeString");
capitalizeButton.addEventListener("click", () => {
    userInput = prompt("Enter a string to capitalize.");
    caseValue = 3;
    displayOutput(userInput, caseValue);
});

const returnLastCharButton = document.getElementById("returnLastChar");
returnLastCharButton.addEventListener("click", () => {
    userInput = prompt("Enter a string to get last character.");
    caseValue = 4;
    displayOutput(userInput, caseValue);
});

function displayOutput(userInput, caseValue) {
    switch (caseValue) {
        case 1:
            console.log(add7(userInput));
            document.querySelector(".function-output").textContent =
                "The sum of " +
                userInput +
                " and 7 is " +
                add7(userInput) +
                ".";
            break;
        case 2:
            const [a, b] = userInput.split(",");
            document.querySelector(".function-output").textContent =
                "The product of " +
                a +
                " and " +
                b +
                " is " +
                multiply(a, b) +
                ".";
            break;
        case 3:
            let outputString = capitalize(userInput);
            console.log(outputString);
            document.querySelector(".function-output").textContent =
                "The capitalized string " +
                userInput +
                " is " +
                outputString +
                ".";
            break;
        case 4:
            let lastChar = lastLetter(userInput);
            console.log(lastChar);
            document.querySelector(".function-output").textContent =
                "The last character of " + userInput + " is " + lastChar + ".";

            break;
        default:
            console.log("wrong input");
            alert("wrong input");
            break;
    }
}
