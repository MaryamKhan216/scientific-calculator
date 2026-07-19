// Display aur scientific grid ko select karein
const display = document.querySelector('.display');
const sciGrid = document.getElementById("scientific-grid");

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
        } 
        // = button: Calculation karne ke liye
        else if (value === '=') {
            try {
                // × aur ÷ ko computer friendly symbols mein badalna
                let expression = display.innerText.replace('×', '*').replace('÷', '/');
                display.innerText = eval(expression);
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
