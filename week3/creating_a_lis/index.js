//Array for styling.
const colors = ["red", "blue", "green", "purple", "yellow", "pink", "brown", "maroon", "orange", "gray"];

//Create an h1 tag with the text "Hello World". Then put it in a for-loop to create it 10 times.
for (i = 0; i < 10; i++)
{
    let h1tag = document.createElement("h1");
    h1tag.textContent = "Hello World";
    h1tag.setAttribute("style", "color:".concat(colors[i]));
    document.body.appendChild(h1tag);
}

//Array taken from assignment requirements.
const names = ["steve", "larry", "joe", "shirley", "steph", "nate", "rick", "emily"];

//Create a for-loop that iterates through the array and displays it as a list.
let unorderLis = document.createElement("ul");
unorderLis.setAttribute("id", "myList");
document.body.appendChild(unorderLis);

for (i = 0; i < names.length; i++)
{
    let listItem = document.createElement("li");
    listItem.textContent = names[i];
    document.getElementById("myList").appendChild(listItem);
}