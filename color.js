
let whyHere = prompt("Do you need are you seriously hurt? yes or no");

if (whyHere == "yes"){
    alert("CALL 911");
    document.write("<style> body {background-color: rgb(230, 19, 19); color: rgb(230, 19, 19);}  */ </style>")
} else if(whyHere == "no"){
    let boolean = confirm("Click OK to continue");
    if (boolean == 1){
        alert("Enjoy the snow!")
    }
    else{
        alert("You should have pressed OK. Refresh the page")
        document.write("<style> body {background-color: rgb(0, 0, 0); color: rgb(0, 0, 0);}  */ </style>")
    }
} else{
    alert("Refresh the page and type in answer correctly and you'll get a surprise")
    // whyHere = prompt("Try that again. Watchout for capital letters. Are you in trouble? Yes or No");
    // if (whyHere == "Yes"){
    //    //alert("CALL 911");
    //     document.write("<style> body {background-color: rgb(255, 255, 255);} */ </style>")
    // } else if(whyHere == "no"){
    //     //alert("Enjoy exploring this site!");
    //     document.write("<style> body {background-color: rgb(255, 255, 255);} */ </style>")
    // } else{
    //     color = prompt("I'm worried about you. How about this? pick a color. R ed or Blue");
    //     if(color = Red){
    //         document.write("<style> body {background-color: rgb(230, 19, 19);} */ </style>");
    //     }
    //     else if(color = Blue){
    //         document.write("<style> body {background-color: rgb(19, 135, 230);} */ </style>") 
    //     }
    //     else{
    //         //prompt("I'm just going to pick white for you")
    //         document.write("<style> body {background-color: rgb(255, 255, 255);} */ </style>")
    //     }
    // }
    document.write("<style> body {background-color: rgb(0, 0, 0);} */ </style>")
}
