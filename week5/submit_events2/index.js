let form = document.getElementById("myForm");
let firstName = form.elements["firstName"];
let lastName = form.elements["lastName"];
let age = form.elements["userAge"];
let enjoy = form.elements["enjoyProd"];
let experience = form.elements["howExp"];
let hurd = form.elements["hurdyDurdy9K"];
let burp = form.elements["burpleTurple"];
let grog = form.elements["grognakSnack"];

form.addEventListener("submit", function() {
    alert(firstName.value + lastName.value + age.value + enjoy.value + experience.value + hurd.value + burp.value + grog.value);
});