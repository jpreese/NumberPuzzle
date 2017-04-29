 (function($, Timer, Puzzle) {
 
    window.Game = function() {
        this.clock = new Timer();
        this.puzzle = new Puzzle();
    };
    
    window.Game.prototype = {
    
        start: function() {
            initializeRandomGrid();
            this.clock.reset();
        },

        click: function(e) {
            this.puzzle.tryMove(e);
            if(this.puzzle.isAscending()) {
                this.clock.stop();
                alert("won");
            }
        },

        reset: function() {
            this.puzzle.resetMoveCount();
            this.start();
        }
    };
    
    var initializeRandomGrid = function () {

        var defaultGrid = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, "", 15];
        //randomizeArray(defaultGrid);

        var cells = $(".col-md-1");
        for (var x = 0; x < cells.length(); x++) {
            cells.eq(x).text(defaultGrid[x]);
        }
    };
    
    var randomizeArray = function(o) {
        for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    };
    
})(jrQuery, Timer, Puzzle);