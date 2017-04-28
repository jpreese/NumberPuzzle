(function ($, Game) {

    window.onload = function () {
        var game = new Game();
        game.start();
        
        $(".col-md-1").click(function (e) {
            game.click(e);
        });
    };
    
}(jrQuery, Game));