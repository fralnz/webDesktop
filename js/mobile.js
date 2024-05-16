const mobileWindows = ["socials", "home", "contact"];

function changeMobileWindow(id){
    mobileWindows.forEach(window => {
        document.getElementById(window).style.display = "none";
    });
    let elmnt = document.getElementById(id);
    elmnt.style.display="block";
}