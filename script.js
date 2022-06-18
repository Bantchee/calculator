// displayArray :
// [Str, Str, Str]
// [storedValue, operator, displayValue]


const numBtns = document.querySelectorAll('.number');
const arithmeticBtns = document.querySelectorAll('.arithmetic');
const clearBtn = document.querySelector('.clear');
const deleteBtn = document.querySelector('.delete');
const equalsBtn = document.querySelector('.equals');
const decimalBtns = document.querySelector('.decimal');

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
function operate(arr) {
    switch(arr[1]) {
        case '+':
            return add(parseFloat(arr[0]), parseFloat(arr[2]));
        case '-':
            return sub(parseFloat(arr[0]), parseFloat(arr[2]));
        case '*':
            return mul(parseFloat(arr[0]), parseFloat(arr[2]));
        case '/':
            return div(parseFloat(arr[0]), parseFloat(arr[2]));
    }
}

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
        // DisplayArray Element 0 is empty
        if (displayArray[0] == "") {
            displayArray[currentIndex] = "";
            display.textContent = "";
        } 
        // DisplayArray Element 3 contains number, operate on displayArray values
        else if(displayArray[2] != "") {
            let value = operate(displayArray);
            currentIndex = 0;
            for(let i = 0; i < displayArray.length; i++) {
                displayArray[i] = "";
            }
            displayArray[0] = value.toString();
            display.textContent = value.toString();
        }
        // Display is a number, add opperator
        else if(!isNaN(parseInt(display.textContent))) {
            currentIndex++;
            displayArray[currentIndex] = btn.textContent;
            display.textContent = `${btn.textContent}`;
        }  
        // Display is empty
        else {
            displayArray[currentIndex] = btn.textContent;
            display.textContent = `${btn.textContent}`;
        }
    });
});

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

// Equals
// If displayArray[2] is not empty
    // then call operate() on displayArray, store value in variable
    // clear displayArray
    // set displayArray[0] to value
    // set display to value
equalsBtn.addEventListener('click', () => {
    if(displayArray[2] != "") {
        let value = operate(displayArray);
        currentIndex = 0;
        for(let i = 0; i < displayArray.length; i++) {
            displayArray[i] = "";
        }
        displayArray[0] = value.toString();
        display.textContent = value.toString();
    }
});

// Decimal 
// if decimal is not in display and currentIndex not 1
    // add decimal to display
// else if display does not contain operator
// else if display == ''
    // add 0. to display
decimalBtns.addEventListener('click', () => {
    if(!display.textContent.includes('.') && currentIndex != 1) {
        displayArray[currentIndex] += ".";
        display.textContent += ".";
    } else if(display.textContent == "") {
        displayArray[currentIndex] = "0.";
        display.textContent = "0.";
    }
})
