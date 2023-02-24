
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
    while ((snowLike != "YES!") && (snowLike != "No, I prefer the beach")) {
        //console.log((snowLike != "YES!") && (snowLike != "No:("));
        snowLike = prompt("Do you like the snow? Type YES! or No, I prefer the beach");
        if ((snowLike == "YES!")) {
            alert("YAY!!! Enjoy this website!")
        }
        else if (snowLike == "No, I prefer the beach") {
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
        let boolean = confirm("Do NOT click Cancel... you'll get a black background if you do. It might look cool");
        if (boolean == 1) {
            return
        }
        else {
            document.write("<style> body {background-color: rgb(0, 0, 0); color: rgb(255, 255, 255);}  */ </style>");
        }
    } else {
        alert("Whoops! You typed that wrong. Hope you weren't trying to type 'yes'. Call 911 if so. Otherwise, refresh the page to type in the answer correctly to read the text of this page.")

        document.write("<style> body {background-color: rgb(0, 0, 0);} */ </style>")
    };
};


function siteRanking() {
    let y = 1;
    while (y == 1) {
        let rank = parseInt(prompt("Without looking at my site, what would you rank it? 1 - 5"));
        // console.log(typeof rank)
        // console.log(rank)
        // console.log(typeof 5)
        console.log(rank == NaN)

        if (rank > -(Infinity)) { // why didnt rank !== NaN not work?
            let rank2 = rank;
            while (y == 1) {//{
                if (rank2 < 1) {
                    alert("With that answer, you won't see anything special.")
                    y = 0;
                } else if (rank2 >= 1 && rank < 6) {
                    alert("Thanks!")
                    forFunction(rank2);
                    y = 0;
                }
                else {
                    alert("More than 5?! Oh wow, thank you! 6 enough though.")
                    rank = 6;
                    forFunction(rank);
                    y = 0;
                }
            }
            for (let i = rank; i > 0; i--){
                if(i>1){
                    alert(i + " stars plus...");
                } else{
                    alert(i + " star")
                }
            }
            rank = rank * (rank + 1) / 2;
            if (rank > 1) {
                alert(rank + " stars! Thank you!");
            }
            
        } else {
            alert("Hey! That is not a number...")
        }
    }
}



function forFunction(variable) {
    let x = "";
    for (let i = 1; i <= variable; i++) {
        x += '<img class="header_pic" src="gold-star.png" alt="gold star">';
        //alert(i);
        document.write('<article id="header_article">' + x + '</article>');
    }
}

// function forFunction(variable){
//     let x = "";
//     for (let i = 1; i <= variable; i++) {
//         x = x + '<img class="header_pic" src="gold-star.png" alt="gold star">';
//         alert(i);
//     }
//     document.write('<header><article id="header_article">' + x + '</article></header>');
// }