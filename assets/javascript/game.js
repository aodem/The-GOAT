//rpg code

var game = {
    characterChoice: 1,
    opponentAttack: function (){
        return (Math.floor((Math.random) * 50))
    },
    charArray: [wilson, brees, rodgers, roethlisberger],
    // character cards to screen
    charCards: function(){
        for (i = 0; i < charArray.length; i++) {
            a = $("<div>");
            a.addClass("card");
            a.appendTo(".card-deck");
            b = $("<img>");
            b.addClass("card-image-top");
            b.attr("src", charArray[i].pic);
            b.attr("alt", "Card image cap");
            b.appendTo(a);
            bSib = $("<div>").insertAfter(b);
            bSib.addClass("card-body");
            c = $("<p>");
            c.text("HP: " + charArray[i].hp);
            c.appendTo(bSib);
        }
    },
}

var wilson = {
    hp: 110,
    attack: game.opponentAttack(),
    pic: "./assets/images/wilson.png",
}

var brees = {
    hp: 150,
    attack: game.opponentAttack(),
    pic: "./assets/images/brees.png",
}

var rodgers = {
    hp: 120,
    attack: game.opponentAttack(),
    pic: "./assets/images/rodgers.png",
}

var roethlisberger = {
    hp: 135,
    attack: game.opponentAttack(),
    pic: "./assets/images/roethlisberger.png",
}

$(document).ready(function () {
    game.charCards();
})


