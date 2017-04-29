(function ($, Game) {

    window.onload = function () {
        var game = new Game();
        game.start();
        
        $(".col-md-1").click(function (e) {
            game.click(e);
        });

        $("#newgame").click(function (e) {
            game.reset();
        });
    };
    
}(jrQuery, Game));