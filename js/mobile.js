const mobileWindows = ["socials", "home", "contact-mobile"];

function changeMobileWindow(id){
    mobileWindows.forEach(window => {
        document.getElementById(window).style.display = "none";
    });
    let elmnt = document.getElementById(id);
    elmnt.style.display="initial";
}