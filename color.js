
let whyHere = prompt("Do you need are you seriously hurt? yes or no");

if (whyHere == "yes"){
    alert("CALL 911");
    document.write("<style> body {background-color: rgb(230, 19, 19); color: rgb(230, 19, 19);}  */ </style>")
} else if(whyHere == "no"){
    let boolean = confirm("Do NOT click Cancel");
    if (boolean == 1){
        alert("Enjoy the snow!")
    }
    else{
        document.write("<style> body {background-color: rgb(0, 0, 0); color: rgb(255, 255, 255);}  */ </style>")
    }
} else{
    alert("Refresh the page and type in answer correctly and you'll get a surprise")

    document.write("<style> body {background-color: rgb(0, 0, 0);} */ </style>")
}
