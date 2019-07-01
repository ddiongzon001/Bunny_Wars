//Define variables
//Characters
var characters = {
    name: ["Bugs Bunny", "Lola Bunny", "Buster Bunny", "Babs Bunny"],
    img: ["../Bunny_Wars/assets/images/bugs-bunny.png", "../Bunny_Wars/assets/images/Lola-Bunny.png", "../Bunny_Wars/assets/images/buster-bunny.png", "../Bunny_Wars/assets/images/babs-bunny.png"],
    hp: [120, 115, 110, 105]
}

//HTML Display variables
var startDisplay = $('#startText');
var char1boxDisplay = $('#character1-select');
var char2boxDisplay = $('#character2-select');
var char3boxDisplay = $('#character3-select');
var char4boxDisplay = $('#character4-select');
var mainboxDisplay = $('#main-select');
var enemy1boxDisplay = $('#enemy1-select');
var enemy2boxDisplay = $('#enemy2-select');
var enemy3boxDisplay = $('#enemy3-select');

var char1NameDisplay = $('#character1-name');
var char2NameDisplay = $('#character2-name');
var char3NameDisplay = $('#character3-name');
var char4NameDisplay = $('#character4-name');
var mainNameDisplay = $('#main-char-name');
var enemy1NameDisplay = $('#enemy1-name');
var enemy2NameDisplay = $('#enemy2-name');
var enemy3NameDisplay = $('#enemy3-name');

var char1PicDisplay = $('#character1-picture');
var char2PicDisplay = $('#character2-picture');
var char3PicDisplay = $('#character3-picture');
var char4PicDisplay = $('#character4-picture');
var mainPicDisplay = $('#main-char-picture');
var enemy1PicDisplay = $('#enemy1-picture');
var enemy2PicDisplay = $('#enemy2-picture');
var enemy3PicDisplay = $('#enemy3-picture');

var char1HPDisplay = $('#character1-HP');
var char2HPDisplay = $('#character2-HP');
var char3HPDisplay = $('#character3-HP');
var char4HPDisplay = $('#character4-HP');
var mainHPDisplay = $('#main-char-HP');
var enemy1HPDisplay = $('#enemy1-HP');
var enemy2HPDisplay = $('#enemy2-HP');
var enemy3HPDisplay = $('#enemy3-HP');

//Define Functions
//Restart Function
function restart() {
    startDisplay.text("Choose somebunny!");
    char1NameDisplay.text(characters.name[0]);
    char1PicDisplay.attr('src', characters.img[0]);
    char1PicDisplay.width('100px');
    char1HPDisplay.text(characters.hp[0]);

    char2NameDisplay.text(characters.name[1]);
    char2PicDisplay.attr('src', characters.img[1]);
    char2PicDisplay.width('80px');
    char2HPDisplay.text(characters.hp[1]);

    char3NameDisplay.text(characters.name[2]);
    char3PicDisplay.attr('src', characters.img[2]);
    char3PicDisplay.width('165px');
    char3HPDisplay.text(characters.hp[2]);

    char4NameDisplay.text(characters.name[3]);
    char4PicDisplay.attr('src', characters.img[3]);
    char4PicDisplay.width('185px');
    char4HPDisplay.text(characters.hp[3]);

    //everything else is hidden
    mainboxDisplay.attr("class", "hidden");
    enemy1boxDisplay.attr("class", "hidden");
    enemy2boxDisplay.attr("class", "hidden");
    enemy3boxDisplay.attr("class", "hidden");
}

//Main Character Selection
function pickHero() {

    //If user picks first character
    char1boxDisplay.on("click", function () {
        char1boxDisplay.attr("class", "hidden");
        char2boxDisplay.attr("class", "hidden");
        char3boxDisplay.attr("class", "hidden");
        char4boxDisplay.attr("class", "hidden");

        //main character shows up
        mainNameDisplay.text(characters.name[0]);
        mainPicDisplay.attr('src', characters.img[0]);
        mainPicDisplay.width('100px');
        mainHPDisplay.text(characters.hp[0]);

        mainboxDisplay.attr("class", "show");
        mainNameDisplay.attr("class", "show");
        mainPicDisplay.attr("class", "show");
        mainHPDisplay.attr("class", "show");

        //enemies show up
        enemy1NameDisplay.text(characters.name[1]);
        enemy1PicDisplay.attr('src', characters.img[1]);
        enemy1PicDisplay.width('80px');
        enemy1HPDisplay.text(characters.hp[1]);
    
        enemy2NameDisplay.text(characters.name[2]);
        enemy2PicDisplay.attr('src', characters.img[2]);
        enemy2PicDisplay.width('165px');
        enemy2HPDisplay.text(characters.hp[2]);

        enemy3NameDisplay.text(characters.name[3]);
        enemy3PicDisplay.attr('src', characters.img[3]);
        enemy3PicDisplay.width('185px');
        enemy3HPDisplay.text(characters.hp[3]);

        enemy1boxDisplay.attr("class", "show");
        enemy1NameDisplay.attr("class", "show");
        enemy1PicDisplay.attr("class", "show");
        enemy1HPDisplay.attr("class", "show");

        enemy2boxDisplay.attr("class", "show");
        enemy2NameDisplay.attr("class", "show");
        enemy2PicDisplay.attr("class", "show");
        enemy2HPDisplay.attr("class", "show");

        enemy3boxDisplay.attr("class", "show");
        enemy3NameDisplay.attr("class", "show");
        enemy3PicDisplay.attr("class", "show");
        enemy3HPDisplay.attr("class", "show");
    });


    // If user picks second character
    char2boxDisplay.on("click", function () {
        char1boxDisplay.attr("class", "hidden");
        char2boxDisplay.attr("class", "hidden");
        char3boxDisplay.attr("class", "hidden");
        char4boxDisplay.attr("class", "hidden");

        //main character shows up
        mainNameDisplay.text(characters.name[1]);
        mainPicDisplay.attr('src', characters.img[1]);
        mainPicDisplay.width('80px');
        mainHPDisplay.text(characters.hp[1]);

        mainboxDisplay.attr("class", "show");
        mainNameDisplay.attr("class", "show");
        mainPicDisplay.attr("class", "show");
        mainHPDisplay.attr("class", "show");

        //enemies show up
        enemy1NameDisplay.text(characters.name[0]);
        enemy1PicDisplay.attr('src', characters.img[0]);
        enemy1PicDisplay.width('100px');
        enemy1HPDisplay.text(characters.hp[0]);
    
        enemy2NameDisplay.text(characters.name[2]);
        enemy2PicDisplay.attr('src', characters.img[2]);
        enemy2PicDisplay.width('165px');
        enemy2HPDisplay.text(characters.hp[2]);

        enemy3NameDisplay.text(characters.name[3]);
        enemy3PicDisplay.attr('src', characters.img[3]);
        enemy3PicDisplay.width('185px');
        enemy3HPDisplay.text(characters.hp[3]);

        enemy1boxDisplay.attr("class", "show");
        enemy1NameDisplay.attr("class", "show");
        enemy1PicDisplay.attr("class", "show");
        enemy1HPDisplay.attr("class", "show");

        enemy2boxDisplay.attr("class", "show");
        enemy2NameDisplay.attr("class", "show");
        enemy2PicDisplay.attr("class", "show");
        enemy2HPDisplay.attr("class", "show");

        enemy3boxDisplay.attr("class", "show");
        enemy3NameDisplay.attr("class", "show");
        enemy3PicDisplay.attr("class", "show");
        enemy3HPDisplay.attr("class", "show");
    });

    // If user picks third character
    char3boxDisplay.on("click", function () {
        char1boxDisplay.attr("class", "hidden");
        char2boxDisplay.attr("class", "hidden");
        char3boxDisplay.attr("class", "hidden");
        char4boxDisplay.attr("class", "hidden");

        //main character shows up
        mainNameDisplay.text(characters.name[2]);
        mainPicDisplay.attr('src', characters.img[2]);
        mainPicDisplay.width('165px');
        mainHPDisplay.text(characters.hp[2]);

        mainboxDisplay.attr("class", "show");
        mainNameDisplay.attr("class", "show");
        mainPicDisplay.attr("class", "show");
        mainHPDisplay.attr("class", "show");

        //enemies show up
        enemy1NameDisplay.text(characters.name[0]);
        enemy1PicDisplay.attr('src', characters.img[0]);
        enemy1PicDisplay.width('100px');
        enemy1HPDisplay.text(characters.hp[0]);
    
        enemy2NameDisplay.text(characters.name[1]);
        enemy2PicDisplay.attr('src', characters.img[1]);
        enemy2PicDisplay.width('80px');
        enemy2HPDisplay.text(characters.hp[1]);

        enemy3NameDisplay.text(characters.name[3]);
        enemy3PicDisplay.attr('src', characters.img[3]);
        enemy3PicDisplay.width('185px');
        enemy3HPDisplay.text(characters.hp[3]);

        enemy1boxDisplay.attr("class", "show");
        enemy1NameDisplay.attr("class", "show");
        enemy1PicDisplay.attr("class", "show");
        enemy1HPDisplay.attr("class", "show");

        enemy2boxDisplay.attr("class", "show");
        enemy2NameDisplay.attr("class", "show");
        enemy2PicDisplay.attr("class", "show");
        enemy2HPDisplay.attr("class", "show");

        enemy3boxDisplay.attr("class", "show");
        enemy3NameDisplay.attr("class", "show");
        enemy3PicDisplay.attr("class", "show");
        enemy3HPDisplay.attr("class", "show");
    });

    //If user picks fourth character
    char4boxDisplay.on("click", function () {
        char1boxDisplay.attr("class", "hidden");
        char2boxDisplay.attr("class", "hidden");
        char3boxDisplay.attr("class", "hidden");
        char4boxDisplay.attr("class", "hidden");

        //main character shows up
        mainNameDisplay.text(characters.name[3]);
        mainPicDisplay.attr('src', characters.img[3]);
        mainPicDisplay.width('185px');
        mainHPDisplay.text(characters.hp[3]);

        mainboxDisplay.attr("class", "show");
        mainNameDisplay.attr("class", "show");
        mainPicDisplay.attr("class", "show");
        mainHPDisplay.attr("class", "show");

        //enemies show up
        enemy1NameDisplay.text(characters.name[0]);
        enemy1PicDisplay.attr('src', characters.img[0]);
        enemy1PicDisplay.width('100px');
        enemy1HPDisplay.text(characters.hp[0]);
    
        enemy2NameDisplay.text(characters.name[1]);
        enemy2PicDisplay.attr('src', characters.img[1]);
        enemy2PicDisplay.width('80px');
        enemy2HPDisplay.text(characters.hp[1]);

        enemy3NameDisplay.text(characters.name[2]);
        enemy3PicDisplay.attr('src', characters.img[2]);
        enemy3PicDisplay.width('165px');
        enemy3HPDisplay.text(characters.hp[2]);

        enemy1boxDisplay.attr("class", "show");
        enemy1NameDisplay.attr("class", "show");
        enemy1PicDisplay.attr("class", "show");
        enemy1HPDisplay.attr("class", "show");

        enemy2boxDisplay.attr("class", "show");
        enemy2NameDisplay.attr("class", "show");
        enemy2PicDisplay.attr("class", "show");
        enemy2HPDisplay.attr("class", "show");

        enemy3boxDisplay.attr("class", "show");
        enemy3NameDisplay.attr("class", "show");
        enemy3PicDisplay.attr("class", "show");
        enemy3HPDisplay.attr("class", "show");
    });

}


//MAIN SECTION OF GAME
$(document).ready(function () {
    restart();
    pickHero();
});