 (function($) {

    window.Puzzle = function() {

        this.moves = 0;

        this.incrementMoveCount = function() {
            this.moves++;
            $("#moves").text(this.moves);

        };

        this.resetMoveCount = function() {
            this.moves = 0;
            $("#moves").text(this.moves);
        }
    };
    
    window.Puzzle.prototype = {

        tryMove: function(e) {

            if(doMoveIfValid(e)) {
                this.incrementMoveCount();
                return true;
            }
            return false;
        },

        isAscending: function() {
            var cells = $(".col-md-1");
            for (var x = 0; x < cells.length() ; x++) {
                if (x+1 != cells.eq(x).html() && x+1 != cells.length()) {
                    return false;
                }
            }
            return true;
        }
    };

    var tryMoveUp = function(e, position) {
        var previousRow = e.parent().prev();
        if (previousRow !== null && isEmptyCell(previousRow.children().eq(position))) {
            moveNumber(e, previousRow.children().eq(position));
            return true;
        }
    };

    var tryMoveLeft = function(e, position) {
        var currentRow = e.parent().children();
        var leftCell = currentRow.eq(position - 1);
        if (isEmptyCell(leftCell)) {
            moveNumber(e, leftCell);
            return true;
        }
    };

    var tryMoveDown = function(e, position) {
        var nextRow = e.parent().next();
        if (nextRow !== null && isEmptyCell(nextRow.children().eq(position))) {
            moveNumber(e, nextRow.children().eq(position));
            return true;
        }
    };

    var tryMoveRight = function(e, position) {
        var currentRow = e.parent().children();
        var rightCell = currentRow.eq(position + 1);
        if (isEmptyCell(rightCell)) {
            moveNumber(e, rightCell);
            return true;
        }
    };

    var doMoveIfValid = function(e) {
        var currentPosition = e.parent().children().index(e);

        if (tryMoveUp(e, currentPosition)) {
            return true;
        }

        if (tryMoveLeft(e, currentPosition)) {
            return true;
        }

        if (tryMoveDown(e, currentPosition)) {
            return true;
        }

        if (tryMoveRight(e, currentPosition)) {
            return true;
        }

        return false;
    };

    var isEmptyCell = function(e) {
        return e.element && e.html() === "";
    };

    var moveNumber = function(source, destination) {
        var sourceValue = source.html();
        source.text("");
        destination.text(sourceValue);
    };
})(jrQuery);