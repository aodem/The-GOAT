//rpg code

var game = {
    characterChoice: 1,
    opponentChoice: 1,
    opponentAttack: function (){
        var attackPoint = Math.floor(Math.random() * 5) + 1;
        return(attackPoint);
    },
    // charArray: [wilson, brees, rodgers, roethlisberger],
    // character cards to screen
    charCards: function(array,selector){
        for (i = 0; i < array.length; i++) {
            a = $("<div>");
            a.addClass("card");
            a.appendTo(selector);
            b = $("<img>");
            b.addClass("card-image-top");
            b.attr("src", array[i].pic);
            b.attr("alt", "Card image cap");
            b.attr("id", array[i].name);
            b.appendTo(a);
            bSib = $("<div>").insertAfter(b);
            bSib.addClass("card-body");
            c = $("<p>");
            c.addClass("pH");
            c.text("HP: " + array[i].hp);
            c.appendTo(bSib);
        }
    },
    resetGame: function () {
        charArray = [wilson, brees, rodgers, roethlisberger];
        fighterArray = [];
        enemyArray = [];
        playerStrike;
        opponentStrike;
        player;
        opponent;
        opponentHealth;
        playerHealth;
        $("playerPick").empty();
        $(".card-deck").empty();
        $("#opponentPick").empty();
        $("#playerPick").empty();
        game.characterChoice = 1;
        game.opponentChoice = 1;
        game.charCards(charArray, ".card-deck");
    },
    lifeCheck: function(para1, para2){
        if(para1 > 0 && para2 <= 0){
            $("#opponentPick").empty();
            alert("Pick A New Enemy QB!");
            alert("You have earned 30 Health Points");
            playerHealth = playerHealth + 30;
            $("#playerPick").children(".card").children(".card-body").children(".pH").text("HP: " + playerHealth);
            game.opponentChoice = 1;
            game.characterChoice = 0;
            enemyArray.pop();
            console.log(game.characterChoice, game.opponentChoice);
            }else if(para2 > 0 && para1 <=0){
            alert("Seems you are not the GOAT after all!")    
            game.resetGame();
            console.log(game.characterChoice, game.opponentChoice);
        };
    },
}

var wilson = {
    name: "russel",
    hp: 110,
    attack: game.opponentAttack(),
    pic: "./assets/images/wilson.png",
}

var brees = {
    name: "drew",
    hp: 150,
    attack: game.opponentAttack(),
    pic: "./assets/images/brees.png",
}

var rodgers = {
    name: "aaron",
    hp: 120,
    attack: game.opponentAttack(),
    pic: "./assets/images/rodgers.png",
}

var roethlisberger = {
    name: "ben",
    hp: 135,
    attack: game.opponentAttack(),
    pic: "./assets/images/roethlisberger.png",
}


var charArray = [wilson, brees, rodgers, roethlisberger];
var fighterArray = [];
var enemyArray = [];
var playerStrike;
var opponentStrike;
var player;
var opponent;
var opponentHealth;
var playerHealth;

$(document).ready(function () {
    $(".saber").hide();
    //to start the game
    $(document).on("keyup", function(e){
        console.log(e)
        if(e.keyCode === 32){
            $("#start_screen").hide();
            $(".saber").show()            
        } else {
            return false;
        }
    })
    
    game.charCards(charArray,".card-deck");
    //player selecttion
    $(document).on("click", "img", function(){
        if(game.characterChoice === 1){
            playerSelect = this;
            console.log($(playerSelect).attr("id"));
            playerId = $(playerSelect).attr("id");
            for(i = 0; i < charArray.length; i++){
                if(charArray[i].name === playerId){
                    player = charArray[i];
                    playerHealth = player.hp;
                    console.log(playerHealth);
                    fighterArray.push(charArray[i]);
                    console.log(player);
                    opponentStrike = player.attack;
                    console.log(opponentStrike);
                    game.characterChoice = 0;
                    charArray.splice(i,1);
                    game.charCards(fighterArray, "#playerPick")
                    $(".card-deck").empty();
                    game.charCards(charArray, ".card-deck");  
                }
            }
        }
        //oppenent seclction
        if (game.characterChoice === 0 && game.opponentChoice === 1 && ($(this).attr('"id') !== player)) {
            opponentSelect = this;
            console.log($(opponentSelect).attr("id"));
            opponentId = $(opponentSelect).attr("id");
            for (j = 0; j < charArray.length; j++) {
                console.log(opponentId);
                if (charArray[j].name === opponentId) {
                    opponent = charArray[j];
                    opponentHealth = opponent.hp;
                    enemyArray.push(charArray[j]);
                    playerStrike = opponent.attack;
                    console.log(playerStrike);
                    game.characterChoice = 2;
                    charArray.splice(j, 1);
                    game.charCards(enemyArray, "#opponentPick")
                    $(".card-deck").empty();
                    game.charCards(charArray, ".card-deck");
                }
            }
        }
    })
    $("#impact").on("click", function(){
       console.log(playerHealth, opponentHealth);
       playerHealth = playerHealth - playerStrike;
       opponentHealth = opponentHealth - opponentStrike;
       console.log(playerHealth, opponentHealth);
       $("#playerPick").children(".card").children(".card-body").children(".pH").text("HP: " + playerHealth);
       $("#opponentPick").children(".card").children(".card-body").children(".pH").text("HP: " + opponentHealth); 
       game.lifeCheck(playerHealth, opponentHealth);
    })

})


