//rpg code

var game = {
    characterChoice: 1,
    opponentChoice: 1,
    opponentAttack: function (){
        var attackPoint = Math.floor(Math.random() * 50);
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
    lifeCheck: function(para1, para2){
        if(para1 > 0 && para2 <= 0){
        $("#opponentPick").empty()
    }else if(para2 > 0 && para1 <=0){
        $("playerPick").empty();
    };
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

    })

})


