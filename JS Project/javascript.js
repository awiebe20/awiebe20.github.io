dragElement(document.getElementById("menu"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) 
  {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } 
  else 
  {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

let minutes = 0; 
let seconds = 0;
let count = 0;

function timer() {
    count++;

    if (count == 1)
    {
        seconds++;
        count = 0;
    }

    if (seconds == 60)
    {
        minutes++;
        seconds = 0;
    }

    let minuntesOutput = minutes;
    let secondsOutput = seconds;

    if (minutes < 10) 
    {
        minuntesOutput = "0" + minuntesOutput;
    }

    if (seconds < 10)
    {
        secondsOutput = "0" + secondsOutput;
    }

    document.getElementById('min').innerHTML = minuntesOutput;
    document.getElementById('sec').innerHTML = secondsOutput;
}

setInterval(timer, 1000);

let hasArrow = false;
let i = -1;
function newWaldo()
{
    i++;
    if (i <= 2)
    {
        let imagesrc = ["https://wallpapercave.com/wp/wp7156924.jpg", "https://i.redd.it/4xb7zuo98hp61.jpg", "https://wallpapers.com/images/hd/where-s-waldo-land-of-fruits-zav6dvoyp290celi.jpg"];
        let imagecoords = ["454,1528,491,1591", "686,506,768,612", "1694,805,1728,861"]
        document.getElementById("gameimage").src = imagesrc[i];
        document.getElementById("Waldo").coords = imagecoords[i];
    }
    else {
        location.href = "endpage.html"
    }
    if (i == 2)
    {
        document.getElementById("GameBody").style.zoom = "70%";
    }
    document.getElementById("solutionArrow").remove();
    hasArrow = false;
}

function solution()
{
    if (!hasArrow)
    {
        let solutionArrow = document.createElement('img');
        solutionArrow.src = "https://pngimg.com/d/red_arrow_PNG73.png";
        solutionArrow.setAttribute('id', 'solutionArrow');
        document.getElementById("showWaldo").appendChild(solutionArrow);
        let solutionArrow2 = document.getElementById("solutionArrow");
        solutionArrow2.style.position = "absolute";
        solutionArrow2.style.width = "150px";
        if (i == -1)
        {
        solutionArrow2.style.right = "33%";
        solutionArrow2.style.top = "40%";
        }
    if (i == 0)
        {
        solutionArrow2.style.left = "19.5%";
        solutionArrow2.style.top = "98%";
        }
    if (i == 1)
        {
        solutionArrow2.style.left = "32%";
        solutionArrow2.style.top = "28%";
        }
    if (i == 2)
        {
        solutionArrow2.style.right = "15.5%";
        solutionArrow2.style.bottom = "20%";
        solutionArrow2.style.transform = "rotate(270deg)";
        }
    }
    
    hasArrow = true;
}
