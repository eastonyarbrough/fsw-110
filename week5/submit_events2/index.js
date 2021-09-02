let form = document.getElementById("myForm");
let firstName = form.elements["firstName"];
let lastName = form.elements["lastName"];
let age = form.elements["userAge"];
let enjoy = form.elements["enjoyProd"];
let experience = form.elements["howExp"];
let hurd = form.elements["hurdyDurdy9K"];
let burp = form.elements["burpleTurple"];
let grog = form.elements["grognakSnack"];

hurd.addEventListener("click", function() {
    if (hurd.value == "")
    {
        hurd.setAttribute("value", "HurdyDurdy9000");
    }
    else if (hurd.value == "HurdyDurdy9000")
    {
        hurd.setAttribute("value", "");
    }
});

burp.addEventListener("click", function() {
    if (burp.value == "")
    {
        burp.setAttribute("value", "BurpleTurple");
    }
    else if (burp.value == "BurpleTurple")
    {
        burp.setAttribute("value", "");
    }
});

grog.addEventListener("click", function() {
    if (grog.value == "")
    {
        grog.setAttribute("value", "GrognakSnack");
    }
    else if (grog.value == "GrognakSnack")
    {
        grog.setAttribute("value", "");
    }
});

form.addEventListener("submit", function() {
    alert("First Name: " + firstName.value + " / Last Name: " + lastName.value + " / Age: " + age.value + " / Did you enjoy our product?: " + enjoy.value + " / How was your experience?: " + experience.value + " / Which product(s) did you purchase?: " + hurd.value + " " + burp.value + " " + grog.value);
});