//Change and default to black.
document.getElementById("mySquare").style.backgroundColor = "black";

function backToBlack()
{
    document.getElementById("mySquare").style.backgroundColor = "black";
}

//Change to green when hovering mouse on square.
function greenHover()
{
    document.getElementById("mySquare").style.backgroundColor = "green";
}

document.getElementById("mySquare").addEventListener("mouseenter", greenHover);
document.getElementById("mySquare").addEventListener("mouseleave", backToBlack);

//Change to yellow when left pressed on square.
function yellowPress()
{
    document.getElementById("mySquare").style.backgroundColor = "yellow";
}

document.getElementById("mySquare").addEventListener("mousedown", yellowPress);

//Change to blue when mouse button released on square.
function blueRelease()
{
    document.getElementById("mySquare").style.backgroundColor = "blue";
}

document.getElementById("mySquare").addEventListener("mouseup", blueRelease);

//Change to red when double clicked on the square.
function redDouble()
{
    document.getElementById("mySquare").style.backgroundColor = "red";
}

document.getElementById("mySquare").addEventListener("dblclick", redDouble);

//Change to purple when using mouse scroll anywhere on the page.
function purpleScroll()
{
    document.getElementById("mySquare").style.backgroundColor = "purple";
}

window.addEventListener("wheel", purpleScroll);

//Change to the previous colors used by keyboard instead.
document.addEventListener("keydown", function(event) {
    if (event.key == 'g')
    {
        document.getElementById("mySquare").style.backgroundColor = "green";
    }
    else if (event.key == "y")
    {
        document.getElementById("mySquare").style.backgroundColor = "yellow";
    }
    else if (event.key == "b")
    {
        document.getElementById("mySquare").style.backgroundColor = "blue";
    }
    else if (event.key == "r")
    {
        document.getElementById("mySquare").style.backgroundColor = "red";
    }
    else if (event.key == "p")
    {
        document.getElementById("mySquare").style.backgroundColor = "purple";
    }
});