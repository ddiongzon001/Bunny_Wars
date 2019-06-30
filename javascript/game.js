
//Define variables
    //Characters
    var characters = {
        name: ["Bugs Bunny", "Lola Bunny", "Buster Bunny", "Babs Bunny"],
        img: ["img1", "img2", "img3","img4"],
        hp: [120,115,110,105]
    }

    
    //HTML Display variables
    var startDisplay = $('#startText');
    var char1NameDisplay = $('#character1-name');
    var char2NameDisplay = $('#character2-name');
    var char3NameDisplay = $('#character3-name');
    var char4NameDisplay = $('#character4-name');
    //IMAGES HERE
    var char1HPDisplay = $('#character1-HP');
    var char2HPDisplay = $('#character2-HP');
    var char3HPDisplay = $('#character3-HP');
    var char4HPDisplay = $('#character4-HP');
    
//Define Functions
    //Restart Function
    function restart(){
        startDisplay.text("Choose somebunny!");
        char1NameDisplay.text(characters.name[0]);
        char2NameDisplay.text(characters.name[1]);
        char3NameDisplay.text(characters.name[2]);
        char4NameDisplay.text(characters.name[3]);
        //IMAGES HERE
        char1HPDisplay.text(characters.hp[0]);
        char2HPDisplay.text(characters.hp[1]);
        char3HPDisplay.text(characters.hp[2]);
        char4HPDisplay.text(characters.hp[3]);
    }
    //Main Character Selection
    function pickHero(){

    }
    

//MAIN SECTION OF GAME
    restart();



