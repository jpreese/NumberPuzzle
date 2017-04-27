(function ($, Game) {

    window.onload = function () {
        var game = new Game();
        game.start();
        
        $(".numberCell").click(function (e) {
            if (doMoveIfValid(e)) {
                updateMoveCounter();
                checkWinningCondition();
            }
        });
    };
    
}(jrQuery, Game));