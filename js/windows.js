// Make the DIV element draggable:
function showWindow(id) {
  let elmnt = document.getElementById(id);
  elmnt.style.transition = "opacity 0.2s ease, box-shadow 0.2s ease"; // Apply transition effect to opacity and box-shadow
  elmnt.style.opacity = "0"; // Initially set opacity to 0
  elmnt.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0)"; // Initially set box-shadow to none
  elmnt.style.display = "block";
  dragElement(elmnt);
  // Trigger reflow before changing opacity to ensure transition is applied
  void elmnt.offsetWidth;
  elmnt.style.opacity = "1"; // Change opacity to 1 to make it visible smoothly
  elmnt.style.boxShadow = "5px 5px 10px rgba(0, 0, 0, 0.5)"; // Add box-shadow with desired parameters (5px offset to the lower right)
  console.log("show window");

  // Add close button
  addCloseButton(elmnt);
}

function addCloseButton(elmnt) {
  // Check if a close button already exists
  if (!document.getElementById(elmnt.id + "CloseButton")) {
    // Create close button
    let closeButton = document.createElement("img");
    closeButton.setAttribute("src", "../media/icons/close-normal.svg");
    closeButton.addEventListener("mouseover", () => {
      closeButton.src = "../media/icons/close-hover.svg";
    });
    closeButton.addEventListener("mouseout", () => {
      closeButton.src = "../media/icons/close-normal.svg";
    });
    closeButton.classList.add("close-button");
    closeButton.id = elmnt.id + "CloseButton"; // Assign an id to the close button

    // Append close button to header
    let header = document.getElementById(elmnt.id + "header");
    header.appendChild(closeButton);

    // Add event listener to close button
    closeButton.addEventListener("click", function () {
      elmnt.style.opacity = "0"; // Set opacity to 0 to hide the window
      setTimeout(function () {
        elmnt.style.display = "none"; // Hide the window
      }, 200); // Wait for the transition to complete (0.2s)
    });
  }
}

function dragElement(elmnt) {
  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
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
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// Add event listener to handle terminal input
document
  .getElementById("inputLine")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      // Execute command
      let command = this.innerText;
      executeCommand(command);
      // Clear input
      this.innerText = "";
    }
  });

function focusInputLine() {
  document.getElementById("inputLine").focus();
}

function executeCommand(command) {
  let output = "Unknown command: " + command;
  // TODO: Implement command execution
  switch (command) {
    case "help":
      output = "inculati";
      break;
    case "":
      output = "";
      break;
  }
  // Display output
  displayOutput(output);
}

function displayOutput(output) {
  let outputElement = document.createElement("p");
  outputElement.innerText = output;
  let terminalDiv = document.getElementById("terminal");
  let inputLine = document.getElementById("inputLine");
  terminalDiv.insertBefore(outputElement, inputLine);
}
