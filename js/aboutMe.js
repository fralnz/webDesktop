function displayAboutSection(id) {
    const elmnt = document.getElementById(id);
    const dock = document.getElementsByClassName("dock")[0];
    elmnt.style.opacity = 0;
    elmnt.style.display = "flex";
    setTimeout(function () {
      elmnt.style.opacity = 1;
    }, 0); // Start the transition immediately after changing display
    dock.style.display = "none";
    elmnt.addEventListener("click", function () {
      elmnt.style.opacity = 0;
      setTimeout(function () {
        elmnt.style.display = "none";
        dock.style.display = "flex";
      }, 300); // Wait for the transition to finish before hiding the element
    });
  }
  