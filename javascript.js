// Display aur scientific grid ko select karein
const display = document.querySelector('.display');
const sciGrid = document.getElementById("scientific-grid");
let history = [];
// Har button par click event listener lagayein
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.innerText;

        // Scientific toggle ka button (keyboard icon)
        if (value === '⌨') {
            sciGrid.style.display = (sciGrid.style.display === "none" || sciGrid.style.display === "") ? "grid" : "none";
        } 
        // AC button: Sab clear karne ke liye
        else if (value === 'AC') {
    display.innerText = '0';
    history = [];
}
        // = button: Calculation karne ke liye
        else if (value === '=') {
    try {
        let expression = display.innerText.replace('×', '*').replace('÷', '/');
        let result = eval(expression);
        history.push(expression + " = " + result);
        display.innerText = result;
    } catch {
        display.innerText = 'Error';
    }
}
         
        // Numbers aur baki operators
        else {
            if (display.innerText === '0') {
                display.innerText = value;
            } else {
                display.innerText += value;
            }
        }
    });
});
