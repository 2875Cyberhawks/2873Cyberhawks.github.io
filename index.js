
//Do the typwritter effect
//  elID - ID of the item you want to type up
//  txt - text you want to put in
//  delay - time (in ms)
function typewriter(elID, txt, delay) {
    if (txt === "") return;
    
    document.getElementById(elID).innerHTML += txt.charAt(0);
    
    if (txt.charAt(1) === " ") {
        window.setTimeout(typewriter, 0, elID, txt.substring(1,txt.length), delay)
    }
    else {
        window.setTimeout(typewriter, delay, elID, txt.substring(1,txt.length), delay)
    }

}

window.setTimeout(typewriter, 500, "writer","2875", 500);
