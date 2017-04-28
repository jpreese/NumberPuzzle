(function ($, Game) {

    window.onload = function () {
        var game = new Game();
        game.start();
        
        $(".numberCell").click(function (e) {
            game.click(e);
        });
    };
    
}(jrQuery, Game));