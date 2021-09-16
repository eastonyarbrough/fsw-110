let form = document.getElementById("myAdd");
let toDoList = document.getElementById("myToDo");
let input1 = form.elements["title"];
let input2 = form.elements["description"];

form.addEventListener("submit", function(e) {
    //Prevent page refresh.
    e.preventDefault();
    //Create list item structure and fill text content.
    let listItem = document.createElement("li");
    let itemTitle = document.createElement("h2");
    let itemDescription = document.createElement("p");
    let clearBtn = document.createElement("button");
    itemTitle.textContent = input1.value;
    itemDescription.textContent = input2.value;
    clearBtn.setAttribute("id", "clearBtn");
    clearBtn.textContent = "Remove"
    toDoList.appendChild(listItem);
    listItem.appendChild(itemTitle);
    listItem.appendChild(itemDescription);
    listItem.appendChild(clearBtn);
    //Reset input boxes for next list item.
    input1.value = "";
    input2.value = "";
    //Remove the list item upon using the clear button.
    clearBtn.addEventListener("click", function() {
        clearBtn.parentNode.remove();
    })
});