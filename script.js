document.getElementById("nameBox").addEventListener("change", writeWindow);

function writeWindow(){
    // if you use console.log("Lookin good"); the console will log it for like a second then refresh. Which is revealing about the process. Using alert gives an alert that remains after the enter button is pressed.
    window.open(); //window is an object just like document
}//end writeWindow();