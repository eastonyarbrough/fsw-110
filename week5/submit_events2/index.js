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
    hurd.setAttribute("value", "HurdyDurdy9000");
});

burp.addEventListener("click", function() {
    burp.setAttribute("value", "BurpleTurple");
});

grog.addEventListener("click", function() {
    grog.setAttribute("value", "GrognakSnack");
});

form.addEventListener("submit", function() {
    alert("First Name: " + firstName.value + " / Last Name: " + lastName.value + " / Age: " + age.value + " / Did you enjoy our product?: " + enjoy.value + " / How was your experience?: " + experience.value + " / Which product(s) did you purchase?: " + hurd.value + " " + burp.value + " " + grog.value);
});