dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

let minute = 0; 
let second = 0;

function stopWatch() {
    count++;

    if (count == 1)
    {
        second++;
        count = 0;
    }

    if (second == 60)
    {
        minute++;
        second = 0;
    }

    let minString = minute;
    let secString = second;

    if (minute < 10) 
    {
        minString = "0" + minString;
    }

    if (second < 10)
    {
        secString = "0" + secString;
    }

    document.getElementById('min').innerHTML = minString;
    document.getElementById('sec').innerHTML = secString;
}

setInterval(stopWatch, 1000);

let i = 0;
function newWaldo()
{
    if (i <= 2)
    {
        let imagesrc = ["https://wallpapercave.com/wp/wp7156924.jpg", "https://i.redd.it/4xb7zuo98hp61.jpg", "https://wallpapers.com/images/hd/where-s-waldo-land-of-fruits-zav6dvoyp290celi.jpg"];
        let imagecoords = ["454,1528,491,1591", "686,506,768,612", "1694,805,1728,861"]
        document.getElementById("gameimage").src = imagesrc[i];
        document.getElementById("Waldo").coords = imagecoords[i];
        i++;
    }
    else {
        location.href = "endpage.html"
    }
}
