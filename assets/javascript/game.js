//rpg code
$(document).ready(function () {
    $(".players").on("click", function(){
        console.log(this);
        $(this).detach().appendTo("#positionLeft");
    }); 
});
