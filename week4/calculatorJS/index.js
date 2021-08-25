//Functions for calculator.
function addition(num1, num2)
{
    return(num1 + num2);
}

function subtraction(num1, num2)
{
    return(num1 - num2);
}

function multiplication(num1, num2)
{
    return(num1 * num2);
}

//Addition.
document.getElementById("addButton").addEventListener("click", function() {
    document.getElementById("addResult").textContent = addition(Number(document.getElementById("addFirst").value), Number(document.getElementById("addSecond").value));
});

//Subtraction.
document.getElementById("subButton").addEventListener("click", function() {
    document.getElementById("subResult").textContent = subtraction(Number(document.getElementById("subFirst").value), Number(document.getElementById("subSecond").value));
});

//Multiplication.
document.getElementById("mulButton").addEventListener("click", function() {
    document.getElementById("mulResult").textContent = multiplication(Number(document.getElementById("mulFirst").value), Number(document.getElementById("mulSecond").value));
});
