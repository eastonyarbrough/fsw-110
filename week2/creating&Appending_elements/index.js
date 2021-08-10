//Create header.
let header1 = document.createElement("h1");
header1.textContent = "Welcome to my JS site";
document.body.appendChild(header1);

//Create paragraph.
let para = document.createElement("p");
para.textContent = "All of this was created with Javascript";
document.body.appendChild(para);

//Create an ordered list.
let orderList = document.createElement("ol");
document.body.appendChild(orderList);

let listItem1 = document.createElement("li");
let listItem2 = document.createElement("li");
let listItem3 = document.createElement("li");

listItem1.textContent = "Davey";
listItem2.textContent = "Churchill";
listItem3.textContent = "Michael";

orderList.appendChild(listItem1);
orderList.appendChild(listItem2);
orderList.appendChild(listItem3);
