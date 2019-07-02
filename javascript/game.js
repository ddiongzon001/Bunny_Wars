//Define variables
//Characters
var characters = {
    name: ["Bugs Bunny", "Lola Bunny", "Buster Bunny", "Babs Bunny"],
    img: ["../Bunny_Wars/assets/images/bugs-bunny.png", "../Bunny_Wars/assets/images/Lola-Bunny.png", "../Bunny_Wars/assets/images/buster-bunny.png", "../Bunny_Wars/assets/images/babs-bunny.png"],
    hp: [120, 115, 110, 105],
    attackPower: [10, 15, 5, 20]
}
var mainChar = "";
var mainDef = "";

var mainHP = 0;
var defHP = 0;

var mainAttackPwr = "";
var defAttackPwr = "";

var defeatedCount = 0;

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
var enemy4boxDisplay = $('#enemy4-select');
var defenderboxDisplay = $('#defender-select');

var char1NameDisplay = $('#character1-name');
var char2NameDisplay = $('#character2-name');
var char3NameDisplay = $('#character3-name');
var char4NameDisplay = $('#character4-name');
var mainNameDisplay = $('#main-char-name');
var enemy1NameDisplay = $('#enemy1-name');
var enemy2NameDisplay = $('#enemy2-name');
var enemy3NameDisplay = $('#enemy3-name');
var enemy4NameDisplay = $('#enemy4-name');
var defenderNameDisplay = $('#defender-name');

var char1PicDisplay = $('#character1-picture');
var char2PicDisplay = $('#character2-picture');
var char3PicDisplay = $('#character3-picture');
var char4PicDisplay = $('#character4-picture');
var mainPicDisplay = $('#main-char-picture');
var enemy1PicDisplay = $('#enemy1-picture');
var enemy2PicDisplay = $('#enemy2-picture');
var enemy3PicDisplay = $('#enemy3-picture');
var enemy4PicDisplay = $('#enemy4-picture');
var defenderPicDisplay = $('#defender-picture');

var char1HPDisplay = $('#character1-HP');
var char2HPDisplay = $('#character2-HP');
var char3HPDisplay = $('#character3-HP');
var char4HPDisplay = $('#character4-HP');
var mainHPDisplay = $('#main-char-HP');
var enemy1HPDisplay = $('#enemy1-HP');
var enemy2HPDisplay = $('#enemy2-HP');
var enemy3HPDisplay = $('#enemy3-HP');
var enemy4HPDisplay = $('#enemy4-HP');
var defenderHPDisplay = $('#defender-HP');

var attacktextDisplay = $('#mainAttackText');
var attacktext2Display = $('#enemyAttackText');

//Define Functions
//show the main character

//Restart Function
function restart() {
    characters.hp = [120, 115, 110, 105];

    startDisplay.attr("class", "col-md-2 show");
    char1boxDisplay.attr("class", "col-md-2 show");
    char2boxDisplay.attr("class", "col-md-2 show");
    char3boxDisplay.attr("class", "col-md-2 show");
    char4boxDisplay.attr("class", "col-md-2 show");

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
    enemy4boxDisplay.attr("class", "hidden");
    defenderboxDisplay.attr("class", "hidden");
    attacktextDisplay.attr("class", "hidden");
    attacktext2Display.attr("class", "hidden");

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

    enemy4NameDisplay.text(characters.name[3]);
    enemy4PicDisplay.attr('src', characters.img[3]);
    enemy4PicDisplay.width('185px');
    enemy4HPDisplay.text(characters.hp[3]);

    defeatedCount = 0;
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

        mainboxDisplay.attr("class", "col-md-2 show");
        mainNameDisplay.attr("class", "show");
        mainPicDisplay.attr("class", "show");
        mainHPDisplay.attr("class", "show");

        mainChar = characters.name[0];

        //enemies show up
        enemy2boxDisplay.attr("class", "col-md-2 show");
        enemy2NameDisplay.attr("class", "show");
        enemy2PicDisplay.attr("class", "show");
        enemy2HPDisplay.attr("class", "show");

        enemy3boxDisplay.attr("class", "col-md-2 show");
        enemy3NameDisplay.attr("class", "show");
        enemy3PicDisplay.attr("class", "show");
        enemy3HPDisplay.attr("class", "show");

        enemy4boxDisplay.attr("class", "col-md-2 show");
        enemy4NameDisplay.attr("class", "show");
        enemy4PicDisplay.attr("class", "show");
        enemy4HPDisplay.attr("class", "show");
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

        mainboxDisplay.attr("class", "col-md-2 show");
        mainNameDisplay.attr("class", "show");
        mainPicDisplay.attr("class", "show");
        mainHPDisplay.attr("class", "show");

        mainChar = characters.name[1];

        //enemies show up
        enemy1boxDisplay.attr("class", "col-md-2 show");
        enemy1NameDisplay.attr("class", "show");
        enemy1PicDisplay.attr("class", "show");
        enemy1HPDisplay.attr("class", "show");

        enemy3boxDisplay.attr("class", "col-md-2 show");
        enemy3NameDisplay.attr("class", "show");
        enemy3PicDisplay.attr("class", "show");
        enemy3HPDisplay.attr("class", "show");

        enemy4boxDisplay.attr("class", "col-md-2 show");
        enemy4NameDisplay.attr("class", "show");
        enemy4PicDisplay.attr("class", "show");
        enemy4HPDisplay.attr("class", "show");
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

        mainboxDisplay.attr("class", "col-md-2 show");
        mainNameDisplay.attr("class", "show");
        mainPicDisplay.attr("class", "show");
        mainHPDisplay.attr("class", "show");

        mainChar = characters.name[2];

        //enemies show up
        enemy1boxDisplay.attr("class", "col-md-2 show");
        enemy1NameDisplay.attr("class", "show");
        enemy1PicDisplay.attr("class", "show");
        enemy1HPDisplay.attr("class", "show");

        enemy2boxDisplay.attr("class", "col-md-2 show");
        enemy2NameDisplay.attr("class", "show");
        enemy2PicDisplay.attr("class", "show");
        enemy2HPDisplay.attr("class", "show");

        enemy4boxDisplay.attr("class", "col-md-2 show");
        enemy4NameDisplay.attr("class", "show");
        enemy4PicDisplay.attr("class", "show");
        enemy4HPDisplay.attr("class", "show");
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

        mainboxDisplay.attr("class", "col-md-2 show");
        mainNameDisplay.attr("class", "show");
        mainPicDisplay.attr("class", "show");
        mainHPDisplay.attr("class", "show");

        mainChar = characters.name[3];

        //enemies show up
        enemy1boxDisplay.attr("class", "col-md-2 show");
        enemy1NameDisplay.attr("class", "show");
        enemy1PicDisplay.attr("class", "show");
        enemy1HPDisplay.attr("class", "show");

        enemy2boxDisplay.attr("class", "col-md-2 show");
        enemy2NameDisplay.attr("class", "show");
        enemy2PicDisplay.attr("class", "show");
        enemy2HPDisplay.attr("class", "show");

        enemy3boxDisplay.attr("class", "col-md-2 show");
        enemy3NameDisplay.attr("class", "show");
        enemy3PicDisplay.attr("class", "show");
        enemy3HPDisplay.attr("class", "show");
    });

}

//Defender Character Selection
function pickDefender() {

    //If user picks first enemy
    enemy1boxDisplay.on("click", function () {

        enemy1boxDisplay.attr("class", "hidden");

        //main defender shows up
        defenderNameDisplay.text(characters.name[0]);
        defenderPicDisplay.attr('src', characters.img[0]);
        defenderPicDisplay.width('100px');
        defenderHPDisplay.text(characters.hp[0]);

        defenderboxDisplay.attr("class", "col-md-2 show");
        defenderNameDisplay.attr("class", "show");
        defenderPicDisplay.attr("class", "show");
        defenderHPDisplay.attr("class", "show");

        mainDef = characters.name[0];
        mainAttackPwr = characters.attackPower[characters.name.indexOf(mainChar)];
        defAttackPwr = characters.attackPower[characters.name.indexOf(mainDef)];
        mainHP = characters.hp[characters.name.indexOf(mainChar)];
        defHP = characters.hp[characters.name.indexOf(mainDef)];

    });

    //If user picks second enemy
    enemy2boxDisplay.on("click", function () {

        enemy2boxDisplay.attr("class", "hidden");

        //main defender shows up
        defenderNameDisplay.text(characters.name[1]);
        defenderPicDisplay.attr('src', characters.img[1]);
        defenderPicDisplay.width('80px');
        defenderHPDisplay.text(characters.hp[1]);

        defenderboxDisplay.attr("class", "col-md-2 show");
        defenderNameDisplay.attr("class", "show");
        defenderPicDisplay.attr("class", "show");
        defenderHPDisplay.attr("class", "show");

        mainDef = characters.name[1];
        mainAttackPwr = characters.attackPower[characters.name.indexOf(mainChar)];
        defAttackPwr = characters.attackPower[characters.name.indexOf(mainDef)];
        mainHP = characters.hp[characters.name.indexOf(mainChar)];
        defHP = characters.hp[characters.name.indexOf(mainDef)];

    });

    //If user picks third enemy
    enemy3boxDisplay.on("click", function () {

        enemy3boxDisplay.attr("class", "hidden");

        //main defender shows up
        defenderNameDisplay.text(characters.name[2]);
        defenderPicDisplay.attr('src', characters.img[2]);
        defenderPicDisplay.width('165px');
        defenderHPDisplay.text(characters.hp[2]);

        defenderboxDisplay.attr("class", "col-md-2 show");
        defenderNameDisplay.attr("class", "show");
        defenderPicDisplay.attr("class", "show");
        defenderHPDisplay.attr("class", "show");

        mainDef = characters.name[2];
        mainAttackPwr = characters.attackPower[characters.name.indexOf(mainChar)];
        defAttackPwr = characters.attackPower[characters.name.indexOf(mainDef)];
        mainHP = characters.hp[characters.name.indexOf(mainChar)];
        defHP = characters.hp[characters.name.indexOf(mainDef)];

    });

    //If user picks fourth enemy
    enemy4boxDisplay.on("click", function () {

        enemy4boxDisplay.attr("class", "hidden");

        //main defender shows up
        defenderNameDisplay.text(characters.name[3]);
        defenderPicDisplay.attr('src', characters.img[3]);
        defenderPicDisplay.width('185px');
        defenderHPDisplay.text(characters.hp[3]);

        defenderboxDisplay.attr("class", "col-md-2 show");
        defenderNameDisplay.attr("class", "show");
        defenderPicDisplay.attr("class", "show");
        defenderHPDisplay.attr("class", "show");

        mainDef = characters.name[3];
        mainAttackPwr = characters.attackPower[characters.name.indexOf(mainChar)];
        defAttackPwr = characters.attackPower[characters.name.indexOf(mainDef)];
        mainHP = characters.hp[characters.name.indexOf(mainChar)];
        defHP = characters.hp[characters.name.indexOf(mainDef)];

    });

}



//Uses the button to attack the defender
function attack() {
    $('#attack').on("click", function () {


        //increases the main's attack power
        mainAttackPwr = mainAttackPwr * 2;
        console.log(mainAttackPwr);

        //decreases HPs
        mainHP = mainHP - defAttackPwr;
        defHP = defHP - mainAttackPwr;

        mainHPDisplay.text(mainHP);
        defenderHPDisplay.text(defHP);

        // shows the damage
        $('#mainAttackText').text("You attacked " + mainDef + " for " + mainAttackPwr + " damage.");
        $('#enemyAttackText').text(mainDef + " attacked you back for " + defAttackPwr + " damage.");

        if (mainHP <= 0) {

            //shows the HP
            mainHPDisplay.text("0");
            defenderHPDisplay.text(defHP);

            //shows the damage
            attacktextDisplay.text("Your life points went to zero! You lost!");
            attacktext2Display.html("<button type='button' class='btn btn-danger' id='again'>Play Again?</button>");
            $('#again').on("click", function () {
                mainGame();
            })
        } else if (defHP <= 0) {

            if (defeatedCount === 3) {
                //shows the HP
                mainHPDisplay.text(mainHP);
                defenderHPDisplay.text(0);

                defenderboxDisplay.attr("class", "hidden");

                //shows the damage
                attacktextDisplay.text("You have defeated all the enemies!");
                attacktext2Display.html("<button type='button' class='btn btn-danger' id='again'>Play Again?</button>");
                $('#again').on("click", function () {
                    mainGame();
                })

            } 
            else {
                //shows the HP
                mainHPDisplay.text(mainHP);
                defenderHPDisplay.text(0);
                
                defenderboxDisplay.attr("class", "hidden");

                //shows the damage
                attacktextDisplay.text("You have defeated " + mainDef + "! You can chose to fight somebunny else.");
                attacktext2Display.text("");

                defeatedCount++;

                contin();
            }
        }

        attacktextDisplay.attr("class", "show");
        attacktext2Display.attr("class", "show");

    });

}

function mainGame() {
    restart();
    pickHero();
    pickDefender();
    attack();
}

function contin() {
    pickDefender();
    attack();
}

//MAIN SECTION OF GAME
$(document).ready(function () {
    restart();
    pickHero();
    pickDefender();
    attack();
});