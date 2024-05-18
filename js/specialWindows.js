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

function toggleMobileContact(id) {
  const elmnt = document.getElementById(id);
  if (elmnt.style.display == "block") elmnt.style.display = "none";
  else elmnt.style.display = "block";
}

function setIntroduction() {
  const introductionText = `Ciao! My name is Francesco Lanza.<br />
  I'm a Computer Science student born and raised in Italy, passionate about everything retro, nature and photography.<br />
  I strive to create software that is as simple and effective as possible, while having fun with it ;)`;
  const elements = [...document.getElementsByClassName("introduction")];
  elements.forEach((p) => {
    p.innerHTML = introductionText;
  });
}

setIntroduction();
