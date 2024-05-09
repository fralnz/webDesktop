// Make the DIV element draggable:
function showWindow(id){
    let elmnt = document.getElementById("terminal");
    document.getElementById("terminal").style.display = "block"
    dragElement(elmnt);
    console.log("show window")
}


function dragElement(elmnt) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
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

// Add event listener to handle terminal input
document.getElementById('inputLine').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        // Execute command
        let command = this.innerText;
        executeCommand(command);
        // Clear input
        this.innerText = '';
    }
});

function focusInputLine() {
    document.getElementById('inputLine').focus();
}

function executeCommand(command) {
    let output = 'Unknown command: ' + command;
    // TODO: Implement command execution
    switch (command){
        case "help":
            output = "inculati"
        case "":
            output = ""
    }
    // Display output
    displayOutput(output);
}

function displayOutput(output) {
    let outputElement = document.createElement('p');
    outputElement.innerText = output;
    let terminalDiv = document.getElementById('terminal');
    let inputLine = document.getElementById('inputLine');
    terminalDiv.insertBefore(outputElement, inputLine);
}