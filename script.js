// displayArray :
// [Str, Str, Str]
// [storedValue, operator, displayValue]


const numBtns = document.querySelectorAll('.number');
const arithmeticBtns = document.querySelectorAll('.arithmetic');
const clearBtn = document.querySelector('.clear');
const deleteBtn = document.querySelector('.delete');

const display = document.querySelector('.display');

let displayArray = ["", "", ""];
let currentIndex = 0;

// Add two number
// IN > OUT: Number Number > Number
const add = (x, y) => x + y;

// Subtracts two Numbers
// IN > OUT: Number Number > Number
const sub = (x, y) => x - y;

// Multiplies two Numbers
// IN > OUT: Number Number > Number
const mul = (x, y) => x * y;

// Divides two Numbers
// IN > OUT: Number Number > Number
const div = (x, y) => checkDenominator(y) ? "Nice Try" : x / y;

// Check if denominator is 0;
// IN > OUT: Number > Boolean 
const checkDenominator = num => num == 0;

// Operates on a Array consisting of two Numbers and a operator, returning the result
// IN > OUT: displayArray > Number

// Update display with the value of button pressed
// Psuedeocode :
// Switch (Button)
// If Button is Number
    // If decimal in display
        // Add display.value + number to display
    // Else If NaN in display
        // Clear display
        // Add Number to display
    // Else
        // Add Number to display.value
// Else if Button is Decimal
    // If Number in display
        // Add display.value + . to display
    // Else
        // Clear display
        // Add 0. to display
// Else if Button is Operator (+, -, *, /)
    // If (* or /)
        // Check if previous athritmetic operator
            // If previouse operator (+ or -)
                // do not calulate num1 (+ or -) num2
                // add (* or /) to array
                // then use order of operations to calulate total value
// Else if Button is Equals
// Else if Button is Clear
// Else if Button is Delete

function update() {
    
}

update();


// If Display has operator
    // currentIndex + 1
    // clear display
    // Add Number to display
    // Add Number to displayArray
// Else
    // Add Number to display
    // Add Number to displayArray
numBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        if(isNaN(parseInt(display.textContent)) && display.textContent != "") {
            currentIndex++;
            displayArray[currentIndex] += btn.textContent;
            display.textContent = `${btn.textContent}`;
        } else {
            displayArray[currentIndex] += btn.textContent;
            display.textContent += `${btn.textContent}`;
        }
    });
});

// Add Arithmetic Operator to display and displayArray
// If number in display
    // currentIndex + 1
    // clear display
    // Add Number to display
    // Add Number to displayArray
// Else
    // Add Number to display
    // Add Number to displayArray
arithmeticBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        if(!isNaN(parseInt(display.textContent))) {
            currentIndex++;
            displayArray[currentIndex] += btn.textContent;
            display.textContent = `${btn.textContent}`;
        } else {
            displayArray[currentIndex] += btn.textContent;
            display.textContent += `${btn.textContent}`;
        }
    });
});

// Equals functionality

// Decimal 
// if btn int but not float

// Clear / All Clear button
// If display empty
    // Clear all stored input
// Else
    // Clear display
clearBtn.addEventListener('click', () => {
    // delete all stored values in displayArray
    if(display.textContent == "") {
        currentIndex = 0;
        for(let i = 0; i < displayArray.length; i++) {
            displayArray[i] = "";
        }
    } else {
        displayArray[currentIndex] = "";
        display.textContent = "";
    }
});

//Delete Button
// If something in display
    // Remove 1 character
deleteBtn.addEventListener('click', () => {
    display.textContent = display.textContent.substring(0, display.textContent.length-1);
    displayArray[currentIndex] = display.textContent;
});