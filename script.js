document.getElementById("nameBox").addEventListener("change", writeWindow);

function writeWindow(){
    // if you use console.log("Lookin good"); the console will log it for like a second then refresh. Which is revealing about the process. Using alert gives an alert that remains after the enter button is pressed.

    // window.open("https://www.kleinlikecalvin.com", "myWin", "width=500, height=500"); 
    //window is an object just like document
    //^^^^ open("url", "name of window", "optional properties") ^^^^

    // const tbValue = document.myForm.nameBox.value;
    //^^^^ document object. name of form . id of form element . value ^^^^^
    //or
    const tbValue = document.getElementById("nameBox").value;
    const favNum = window.prompt("Hey " + tbValue + ", what's your favorite number?");

    //when you want to pass data to a window you have to place the window inside a const or let
    const windowVar = window.open("about:blank", "myWin", "width = 500, height = 500");

    //favNum get saved as a string which is passed to favNumParsed and the parseInt method turns it into a number
    const favNumParsed = parseInt(favNum);
    windowVar.document.write("<div style='color: red; font-weight: bold; text-align: center;'>"); //write something to the parent window, you can use tags and inline css
    windowVar.document.write("Hello " + tbValue + ", your favorite number is " + favNumParsed);
    windowVar.document.write("</div>");
    windowVar.document.write(tbValue + ", I think you're " + favNumParsed * favNumParsed + " years old");
    windowVar.document.write("<form>");
    windowVar.document.write('<input type="button" id="myBtn" value="Print this page!">');
    windowVar.document.write("</form>");
    windowVar.document.getElementById("myBtn").addEventListener("click", printWindow);

    function printWindow(){
        windowVar.print();
    }


}//end writeWindow();ß