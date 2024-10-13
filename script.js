// Get the HTML element with the ID 'display' and assign it to the variable 'display'.
// This will be used to show the calculator input and output.
const display = document.getElementById('display')


/**
 * Appends the given input to the current value in the display.
 * This function is called when a button on the calculator is pressed.
 */
function appendToDisplay(input){
    // Add the input to the existing value in the display field.
    display.value += input;
}

/**
 * Clears the display by setting its value to an empty string.
 * This function is typically called when the 'AC' (all clear) button is pressed.
 */
function clearDisplay(){
    display.value = "";
}

/**
 * Evaluates the expression in the display and shows the result.
 * This function is called when the '=' (equals) button is pressed.
 */
function calculate(){
    // Use the 'eval' function to evaluate the mathematical expression in the display.
    // If it's a valid expression, the result is calculated and displayed.
    try{
        display.value = eval(display.value);
    }

    // If it is not valid, display an error message
    catch(error){
        display.value = 'Huh?'
    }
}