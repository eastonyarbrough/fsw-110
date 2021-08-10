///Requirement #1: Create a navbar.
//Create div for navbar.
let navBarDiv = document.createElement("div");
navBarDiv.setAttribute("id", "topNav");
document.body.appendChild(navBarDiv);

//Create anchors for navbar.
let anchorMy = document.createElement("a");
let anchorNav = document.createElement("a");
anchorMy.setAttribute("href", "#My");
anchorNav.setAttribute("href", "#Navbar");
anchorMy.setAttribute("id", "aMy");
anchorNav.setAttribute("id", "aNav");
anchorMy.textContent = "My";
anchorNav.textContent = "Navbar";
document.getElementById("topNav").appendChild(anchorMy);
document.getElementById("topNav").appendChild(anchorNav);

//Style navbar background.
document.getElementById("topNav").style.backgroundColor = "blue";
document.getElementById("topNav").style.overflow = "hidden";

//Style navbar option "My".
document.getElementById("aMy").style.float = "left";
document.getElementById("aMy").style.color = "silver";
document.getElementById("aMy").style.textAlign = "center";
document.getElementById("aMy").style.padding = "14px 16px";
document.getElementById("aMy").style.fontSize = "17px";

//Style navbar option "Navbar".
document.getElementById("aNav").style.float = "left";
document.getElementById("aNav").style.color = "silver";
document.getElementById("aNav").style.textAlign = "center";
document.getElementById("aNav").style.padding = "14px 16px";
document.getElementById("aNav").style.fontSize = "17px";
