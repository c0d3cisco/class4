
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
    

    function getName(){
    let theirName = prompt("Hello and welcome! Please type your name");
    // return theirName
    document.write(theirName)
    };

    // function writeName(){
    //     document.write(theirName)
    // }


    function likeSnow(){
        let snowLike = prompt("Do you like the snow? Type YES! or No:(");
        console.log(snowLike)
        console.log(typeof snowLike)
        if((snowLike == "YES!" || snowLike == "No:(")){
                return
            }
        else if(snowLike == null || snowLike == ""){
            alert("Please provide an answer");
            likeSnow();
        }
        else {
            alert("Please type that correctly :)")
            likeSnow();
        }
    }


    function colorFunction(){
        let whyHere = prompt("Do you need are you seriously hurt? yes or no. If yes... the entire page will be red and you wont be able to read much");
        
        if (whyHere == "yes"){
            alert("CALL 911");
            document.write("<style> body {background-color: rgb(230, 19, 19); color: rgb(230, 19, 19);}  */ </style>")
        } else if(whyHere == "no"){
            let boolean = confirm("Do NOT click Cancel");
            if (boolean == 1){
                alert("Enjoy the snow!");
            }
            else{
                document.write("<style> body {background-color: rgb(0, 0, 0); color: rgb(255, 255, 255);}  */ </style>");
            }
        } else{
            alert("Refresh the page and type in answer correctly and you'll get a surprise")
            
            document.write("<style> body {background-color: rgb(0, 0, 0);} */ </style>")
        };
        };
        