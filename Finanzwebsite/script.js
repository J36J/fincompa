///////////////////
// CONFIGURATION //
///////////////////


// Path of the page directory
const pagesDirectory = "page/";

// Default html page (home page)
const defaultPage = "home";


//////////////////
// INCLUDE HTML //
//////////////////


/**
 * Function that injects a html file into a tag having the property include-html="path.html".
 * Source: https://www.w3schools.com/howto/howto_html_include.asp
 */
function includeHTML() {
    var z, i, elmnt, file, xhttp;
    // Loop through a collection of all HTML elements:
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        // Search for elements with a certain attribute:
        file = elmnt.getAttribute("include-html");
        if (file === "$page") {
            const urlParams = new URLSearchParams(window.location.search);
            let page = urlParams.get("page");
            if (!page) {
                page = defaultPage; 
            }
            file = pagesDirectory + page + ".html";
        }
        if (file) {
            // Make an HTTP request using the attribute value as the file name
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) { 
                        elmnt.innerHTML = this.responseText; 
                    } else if (this.status == 404) {
                        // Page not found, display the fail foto
                        elmnt.innerHTML = "Error 404 - Seite nicht gefunden<br>Die von Ihnen gesuchte Seite ist nicht (mehr) verfügbar.<br><a href='index.html?page=home'>Hier</a> geht es zurück zur Hompage.";
                    }
                    // Remove the attribute, and call this function once more:
                    elmnt.removeAttribute("include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            return;
        }
    }
}

document.addEventListener("DOMContentLoaded", function (event) {
    includeHTML();  
});






let numcat = 28; // Defines the number of available categories for all indexes and all brokers
let numbrok = 14; // Defines the number of available brokers for all indexes 

const standardin = {
    // weightings in %
    scoreweight1: 1,
    scoreweight2: 2,
    scoreweight3: 3,
    scoreweight4: 2,
    scoreweight5: 1,
    scoreweight6: 3,
    scoreweight7: 2,
    scoreweight8: 1,
    scoreweight9: 5,
    scoreweight10: 3,
    scoreweight11: 6,
    scoreweight12: 5,
    scoreweight13: 3,
    scoreweight14: 2,
    scoreweight15: 2,
    scoreweight16: 2,
    scoreweight17: 3,
    scoreweight18: 4,
    scoreweight19: 2,
    scoreweight20: 4,
    scoreweight21: 1,
    scoreweight22: 2,
    scoreweight23: 4,
    scoreweight24: 6,
    scoreweight25: 5,
    scoreweight26: 1,
    scoreweight27: 2,
    scoreweight28: 4,
};

const longin = {
    // weightings in %
    scoreweight1: 2,
    scoreweight2: 1,
    scoreweight3: 4,
    scoreweight4: 1,
    scoreweight5: 2,
    scoreweight6: 2,
    scoreweight7: 3,
    scoreweight8: 2,
    scoreweight9: 6,
    scoreweight10: 2,
    scoreweight11: 7,
    scoreweight12: 4,
    scoreweight13: 4,
    scoreweight14: 1,
    scoreweight15: 3,
    scoreweight16: 1,
    scoreweight17: 4,
    scoreweight18: 3,
    scoreweight19: 1,
    scoreweight20: 3,
    scoreweight21: 2,
    scoreweight22: 1,
    scoreweight23: 5,
    scoreweight24: 5,
    scoreweight25: 4,
    scoreweight26: 2,
    scoreweight27: 3,
    scoreweight28: 3,
};

const tradein = {
    // weightings in %
    scoreweight1: 1,
    scoreweight2: 2,
    scoreweight3: 3,
    scoreweight4: 4,
    scoreweight5: 5,
    scoreweight6: 6,
    scoreweight7: 7,
    scoreweight8: 8,
    scoreweight9: 9,
    scoreweight10: 10,
    scoreweight11: 1,
    scoreweight12: 2,
    scoreweight13: 3,
    scoreweight14: 4,
    scoreweight15: 5,
    scoreweight16: 6,
    scoreweight17: 7,
    scoreweight18: 8,
    scoreweight19: 9,
    scoreweight20: 10,
    scoreweight21: 1,
    scoreweight22: 2,
    scoreweight23: 3,
    scoreweight24: 4,
    scoreweight25: 5,
    scoreweight26: 6,
    scoreweight27: 7,
    scoreweight28: 8,
};

let individin = {
    // weightings in %
    scoreweight1: null,
    scoreweight2: null,
    scoreweight3: null,
    scoreweight4: null,
    scoreweight5: null,
    scoreweight6: null,
    scoreweight7: null,
    scoreweight8: null,
    scoreweight9: null,
    scoreweight10: null,
    scoreweight11: null,
    scoreweight12: null,
    scoreweight13: null,
    scoreweight14: null,
    scoreweight15: null,
    scoreweight16: null,
    scoreweight17: null,
    scoreweight18: null,
    scoreweight19: null,
    scoreweight20: null,
    scoreweight21: null,
    scoreweight22: null,
    scoreweight23: null,
    scoreweight24: null,
    scoreweight25: null,
    scoreweight26: null,
    scoreweight27: null,
    scoreweight28: null,
}



function standardscore() {
    // remove the submit button for the individual index if existing:
    document.getElementById("submitweight").style.visibility = "hidden";

    //updates all wheightings for the Standard Index
    for (i = 1; i <= numcat; i++) {
    document.getElementById(`scoreweight${i}`).innerHTML = standardin[`scoreweight${i}`] + "%";
    };
    
    // updates the scores for all brokers:
    for (x = 1;x <= numbrok; x++) {
        let score = 0;
        for (y = 1;y <= numcat; y++) {
            let categoryWeight = standardin[`scoreweight${y}`]/100;
            let categoryScore = document.getElementById(`cat${y}brok${x}`).innerHTML;
            score += categoryWeight * categoryScore;
        };
        document.getElementById(`score${x}`).innerHTML = score.toFixed(1);
    };
};

function longscore() {
    // remove the submit button for the individual index if existing:
    document.getElementById("submitweight").style.visibility = "hidden";

    //updates all wheightings for the Longterm Index
    for (i = 1; i <= numcat; i++) {
        document.getElementById(`scoreweight${i}`).innerHTML = longin[`scoreweight${i}`] + "%";
    };

    // updates the scores for all brokers:
    for (x = 1;x <= numbrok; x++) {
        let score = 0;
        for (y = 1;y <= numcat; y++) {
            let categoryWeight = longin[`scoreweight${y}`]/100;
            let categoryScore = document.getElementById(`cat${y}brok${x}`).innerHTML;
            score += categoryWeight * categoryScore;
        };
        document.getElementById(`score${x}`).innerHTML = score.toFixed(1);
    };
};

function tradescore() {
    // remove the submit button for the individual index if existing:
    document.getElementById("submitweight").style.visibility = "hidden";

    //updates all wheightings for the Trader Index:
    for (i = 1; i <= numcat; i++) {
        document.getElementById(`scoreweight${i}`).innerHTML = tradein[`scoreweight${i}`] + "%";
    };

    // updates the scores for all brokers:
    for (x = 1;x <= numbrok; x++) {
        let score = 0;
        for (y = 1;y <= numcat; y++) {
            let categoryWeight = tradein[`scoreweight${y}`]/100;
            let categoryScore = document.getElementById(`cat${y}brok${x}`).innerHTML;
            score += categoryWeight * categoryScore;
        };
        document.getElementById(`score${x}`).innerHTML = score.toFixed(1);
    };  
};

function indinput() {
    //update wheigting to input (source: https://www.w3schools.com/jsref/dom_obj_text.asp): 
    document.getElementById("submitweight").style.visibility = "visible";
    
    for (x = 1; x <= numbrok; x++) {
        document.getElementById(`score${x}`).innerHTML = "";
    }
    for (x = 1; x <= numcat; x++) {
        // sets the score to zero again
        document.getElementById(`scoreweight${x}`).innerHTML = "";
        // creates input to sign in the prefered weighting of the specific criteria
        let input = document.createElement("input");
        input.setAttribute("type", "number");
        input.setAttribute("id", `value${x}`);
        input.setAttribute("class", "indiweight");
        input.setAttribute("min", "0");
        input.setAttribute("max", "100");
        document.getElementById(`scoreweight${x}`).appendChild(input);
    };
};

function getValues() {
    // sets the new scores into the fields
    for (i = 1; i <= numcat; i++) {
        let newValue = document.getElementById(`value${i}`).value;
        document.getElementById(`scoreweight${i}`).innerHTML = newValue + "%";
        individin[`scoreweight${i}`] = newValue;  // replaces the "null" values in the individin object with the newValue
        if (newValue > 100) {
            alert("Please pick a number between 0.1 and 100 to perform the calculation correctly.");
        }
    };
    // updates the scores for all brokers:
    for (x = 1;x <= numbrok; x++) {
        let score = 0;
        for (y = 1;y <= numcat; y++) {
            let categoryWeight = individin[`scoreweight${y}`]/100;
            let categoryScore = document.getElementById(`cat${y}brok${x}`).innerHTML;
            score += categoryWeight * categoryScore;
        };
        document.getElementById(`score${x}`).innerHTML = score.toFixed(1);
    };  
}




function changever(menu) {
    menu.classList.toggle("change");
};

function sidebar() {
    document.getElementById("sidebar").classList.toggle("sidebar");
    document.getElementById("menulink").classList.toggle("menulinkactive");
};

function showweight(t) {
    t.classList.toggle("show");
};







