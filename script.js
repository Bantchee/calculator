// displayArray :
// [Number, Number, String]
// [storedValue, displayValue, operator]

const btns = document.querySelectorAll('.button');
const display = document.querySelector('.display');

let displayArray = [];

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
const div = (x, y) => x / y;

// Check if denominator is 0;
// IN > OUT: Number > Boolean 
const checkDenominator = num => num == 0;

// Operates on a Array consisting of two Numbers and a operator, returning the result
// IN > OUT: [Number, Number, Operator] > Number

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
// Else if Button is Equals
// Else if Button is Clear
// Else if Button is Delete
// Else if Button is Power
// Else if Button is 'Negative/Positive'
// Else if Button is Percent
// Else if Button is Parenthasis

function update() {
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            if(!(isNaN(parseInt(btn.textContent))) || btn.textContent == '.') {
                displayArray[0] += (btn.textContent);
                display.textContent += `${btn.textContent}`;
            } else {
                displayArray.push(btn.textContent);
                display.textContent = `${btn.textContent}`;
            }
        });
    });
}

update();