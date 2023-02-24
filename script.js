
// let myName = "Cisco";

// alert("Welcome to my website " + myName + "! Take your time and read this to stay saf in the snow.");


// let whyYouHere = "First Aid";
// console.log(whyYouHere);

// whyYouHere = "purple";
// console.log(whyYouHere)

// // input from a user

// let theirName = prompt("What is your name?");

// console.log()
// document.write("Welcome to my website " + theirName + "! Take your time and read this to stay saf in the snow.");

//these were static comands. DYNAMIC commands will change the website.

// let whyHere = prompt("Do you need are you seriously hurt? yes or no");

// if (whyHere == "yes"){
//     alert("CALL 911");
//     document.write("<style> body {background-color: rgb(230, 19, 19);} */ </style>")
// } else if(whyHere == "no"){
//     alert("Enjoy exploring this site!");
// } else{
//     alert("Refresh the page and type in answer correctly and you'll get a surprise")
//     document.write("<style> body {background-color: rgb(0, 0, 0);} */ </style>")
// }


function getName() {
    let theirName = prompt("Hello and welcome! Please type your name");
    // return theirName
    document.write(theirName)
};

// function writeName(){
//     document.write(theirName)
// }

function likeSnow() {
    let snowLike = "";
    while ((snowLike != "YES!") && (snowLike != "No:(")) {
        console.log((snowLike != "YES!") && (snowLike != "No:("));
        snowLike = prompt("Do you like the snow? Type YES! or No:(");
        if ((snowLike == "YES!")) {
            alert("YAY!!! Enjoy this website!")
        }
        else if (snowLike == "No:(") {
            alert("Boo... okay. Well, try to enjoy this webiste.")
        }
        else if (snowLike == null || snowLike == "") {
            alert("Please provide an answer");
        }
        else {
            alert("Please type that correctly :)")
        }
    }
}


function colorFunction() {
    let whyHere = prompt("Are you seriously hurt? Type your answer exactly as yes or no.");

    if (whyHere == "yes") {
        alert("You can't have fun in the snow, so the entire screen will be red. Call 911!");
        document.write("<style> body {background-color: rgb(230, 19, 19); color: rgb(230, 19, 19);}  */ </style>")
    } else if (whyHere == "no") {
        let boolean = confirm("Do NOT click Cancel");
        if (boolean == 1) {
            return
        }
        else {
            document.write("<style> body {background-color: rgb(0, 0, 0); color: rgb(255, 255, 255);}  */ </style>");
        }
    } else {
        alert("Refresh the page and type in answer correctly and you'll get a surprise")

        document.write("<style> body {background-color: rgb(0, 0, 0);} */ </style>")
    };
};


function siteRanking() {
    let rank = prompt("Without looking at my site, what would you rank it? 1-5");
    let y = 1;
    while (y == 1) {//{
        console.log(y)
        console.log(typeof rank);
        let x = "";
        for (let i = 1; i <= rank; i++) {
            x = x + '<img class="header_pic" src="gold-star.png" alt="gold star">';
        }
        document.write('<article id="header_article">' + x + '</article>')
        if (rank < 1) {
            alert("With that answer, you won't see anything special.")
            y = 0;
        } else if (rank >= 1 && rank < 6) {
            alert("Thanks!")
            y = 0;
        }
        else {
            alert("More than 5?! Oh wow, thank you!")
            y = 0;
        }

    }
}