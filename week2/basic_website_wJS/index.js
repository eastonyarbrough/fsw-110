///For style (not a requirement).
document.body.style.backgroundColor = "black";

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



///Requirement #2: Create an h1 tag.
//Create the h1 tag.
let header = document.createElement("h1");
header.setAttribute("id", "myHeader");
header.textContent = "This is my header!"
document.body.appendChild(header);

//Style the h1 tag.
document.getElementById("myHeader").style.color = "silver";
document.getElementById("myHeader").style.textAlign = "center";



///Requirement #3: Create a p tag.
//Create the p tag.
let para = document.createElement("p");
para.setAttribute("id", "myPara");
para.textContent = "This is my paragraph! Sorry if I was not supposed to style the page. I found out how to do this while googling how to make a navbar. I thought it was pretty cool so I may have gone a little overboard.";
document.body.appendChild(para);

//Style the p tag.
document.getElementById("myPara").style.color = "silver";
document.getElementById("myPara").style.textAlign = "center";



///Requirement #4: Create a list.
//Create unordered list.
let unorderList = document.createElement("ul")
unorderList.setAttribute("id", "myList");
document.body.appendChild(unorderList);

//Create list items.
let list1 = document.createElement("li");
let list2 = document.createElement("li");
let list3 = document.createElement("li");
list1.textContent = "My first list item";
list2.textContent = "My second list item";
list3.textContent = "My third list item";
document.getElementById("myList").appendChild(list1);
document.getElementById("myList").appendChild(list2);
document.getElementById("myList").appendChild(list3);

//Style list and list items.
document.getElementById("myList").style.color = "silver";
document.getElementById("myList").style.textAlign = "center";



///Requirement #5: Create a footer.
//Create a div for the footer.
let foot = document.createElement("div");
foot.setAttribute("id", "myFoot");
document.body.appendChild(foot);

//Create a p tag within the footer.
let footText = document.createElement("p");
footText.setAttribute("id", "myFootTxt");
footText.textContent = "This is my footer!"
document.getElementById("myFoot").appendChild(footText);

//Style footer background.
document.getElementById("myFoot").style.backgroundColor = "blue";
document.getElementById("myFoot").style.overflow = "hidden";
document.getElementById("myFoot").style.position = "fixed";
document.getElementById("myFoot").style.bottom = "0";
document.getElementById("myFoot").style.left = "0";
document.getElementById("myFoot").style.width = "100%";


//Style footer text.
document.getElementById("myFootTxt").style.color = "silver";
document.getElementById("myFootTxt").style.textAlign = "center";
