 (function($, Timer, Puzzle, Notification) {
 
    window.Game = function() {
        this.clock = new Timer();
        this.puzzle = new Puzzle();
    };
    
    window.Game.prototype = {

        init: function () {
            var zeros = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            fillGrid(zeros);
        },
    
        startNormalGame: function() {
            initializeRandomGrid();
            this.reset();
        },

        startEasyGame: function() {
            initializeEasyGrid();
            this.reset();
        },

        click: function(e) {
            if(this.clock.timer === 0) {
                return;
            }

            if(this.puzzle.tryMove(e) == false) {
                Notification.invalidNotification();
            }

            if(this.puzzle.isAscending()) {
                this.clock.stop();
                Notification.winNotification();
            }
        },

        reset: function() {
            this.puzzle.resetMoveCount();
            Notification.hideNotifications();
            this.clock.reset();
        }
    };

    var fillGrid = function(numbers) {
        var cells = $(".col-md-1");
        for (var x = 0; x < cells.length(); x++) {
            cells.eq(x).text(numbers[x]);
        }
    }
    
    var initializeRandomGrid = function () {
        var defaultGrid = getNumberArray();
        randomizeArray(defaultGrid);
        fillGrid(defaultGrid);
    };

    var initializeEasyGrid = function() {
        var defaultGrid = getNumberArray();
        fillGrid(defaultGrid);
    }

    var getNumberArray = function() {
        return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, "", 15];
    }
    
    var randomizeArray = function(o) {
        for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    };
    
})(jrQuery, Timer, Puzzle, Notification);