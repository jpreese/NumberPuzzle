(function($, Game) {

    window.onload = function() {
        var game = new Game();
        game.init();
        
        $(".col-md-1").click(function (e) {
            game.click(e);
        });

        $("#newgame").click(function (e) {
            game.startNormalGame();
        });

        $("#easygame").click(function (e) {
            game.startEasyGame();
        });
    };
}(jrQuery, Game));