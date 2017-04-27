 (function($, Timer) {
 
    window.Game = function() {
        this.clock = new Timer();
    };
    
    window.Game.prototype = {
    
        start: function() {
            initializeRandomGrid();
            this.clock.start();
        }
    };
    
    var initializeRandomGrid = function () {

        var defaultGrid = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, "", 15];
        randomizeArray(defaultGrid);

        var cells = $(".numberCell");
        for (var x = 0; x < cells.length(); x++) {
            cells.eq(x).text(defaultGrid[x]);
        }
    };
    
    var randomizeArray = function(o) {
        for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    };
    
})(jrQuery, Timer);