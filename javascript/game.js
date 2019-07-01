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

var char1NameDisplay = $('#character1-name');
var char2NameDisplay = $('#character2-name');
var char3NameDisplay = $('#character3-name');
var char4NameDisplay = $('#character4-name');

var char1PicDisplay = $('#character1-picture');
var char2PicDisplay = $('#character2-picture');
var char3PicDisplay = $('#character3-picture');
var char4PicDisplay = $('#character4-picture');

var char1HPDisplay = $('#character1-HP');
var char2HPDisplay = $('#character2-HP');
var char3HPDisplay = $('#character3-HP');
var char4HPDisplay = $('#character4-HP');

var mainboxDisplay = $('#main-select');
var mainNameDisplay = $('#main-char-name');
var mainPicDisplay = $('#main-char-picture');
var mainHPDisplay = $('#main-char-HP');

//Define Functions
//Restart Function
function restart() {
    startDisplay.text("Choose somebunny!");
    char1NameDisplay.text(characters.name[0]);
    char2NameDisplay.text(characters.name[1]);
    char3NameDisplay.text(characters.name[2]);
    char4NameDisplay.text(characters.name[3]);

    char1PicDisplay.attr('src', characters.img[0]);
    char1PicDisplay.width('100px');
    char2PicDisplay.attr('src', characters.img[1]);
    char2PicDisplay.width('80px');
    char3PicDisplay.attr('src', characters.img[2]);
    char3PicDisplay.width('165px');
    char4PicDisplay.attr('src', characters.img[3]);
    char4PicDisplay.width('185px');

    char1HPDisplay.text(characters.hp[0]);
    char2HPDisplay.text(characters.hp[1]);
    char3HPDisplay.text(characters.hp[2]);
    char4HPDisplay.text(characters.hp[3]);

    //everything else is hidden
    mainboxDisplay.attr("class", "hidden");
}

//Main Character Selection
function pickHero() {
    //other characters hide
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
    });







}


//MAIN SECTION OF GAME
$(document).ready(function () {
    restart();
    pickHero();
});