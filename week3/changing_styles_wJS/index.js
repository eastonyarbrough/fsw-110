//Create five h1 tags using a for-loop.
for (i = 0; i < 5; i++)
{
    let headers = document.createElement("h1");
    headers.textContent = "filler content";
    headers.classList.add("border");
    document.body.appendChild(headers).style.fontSize = "20px"
    document.body.appendChild(headers).style.fontWeight = "lighter"
    document.body.appendChild(headers).style.fontFamily = "sans-serif"
    document.body.appendChild(headers).style.color = "cornflowerblue"
}
