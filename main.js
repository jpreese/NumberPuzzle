(function ($, Timer, Puzzle) {

    window.onload = function () {

        var timer = new Timer();
        var puzzle = new Puzzle();
        timer.start();

        $(".numberCell").click(function (e) {
            if (doMoveIfValid(e)) {
                updateMoveCounter();
                checkWinningCondition();
            }
        });

        puzzle.initializeRandomGrid();
    };

}(jrQuery, Timer, Puzzle));