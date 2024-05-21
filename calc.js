let expression = '';
const display = document.getElementById('display');

function appendToDisplay(value) {
    expression += value;
    updateDisplay();
}

function clearDisplay() {
    expression = '';
    updateDisplay();
}

function calculate() {
    try {
        const result = eval(expression);
        display.value = result;
        expression = '';
    } catch (error) {
        display.value = 'Error';
    }
}

function updateDisplay() {
    // Format the expression to display four digits per row
    let formattedExpression = '';
    for (let i = 0; i < expression.length; i += 4) {
        formattedExpression += expression.slice(i, i + 4) + ' ';
    }
    display.value = formattedExpression.trim();
}
