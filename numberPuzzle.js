(function ($) {

    var randomizeArray = function (o) {
        for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    }

    var initializeRandomGrid = function () {

        var defaultGrid = ["", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
        //randomizeArray(defaultGrid);

        var cells = $(".numberCell");
        for (var x = 0; x < cells.length(); x++) {
            cells.eq(x).text(defaultGrid[x]);
        }
    }

    var doMoveIfValid = function (e) {

        var currentRow = e.parent().children();
        var position = currentRow.index(e);

        // move up
        var previousRow = e.parent().prev();
        if (previousRow !== null && isEmptyCell(previousRow.children().eq(position))) {
            moveNumber(e, previousRow.children().eq(position));
            return;
        }

        // move left
        var leftCell = currentRow.eq(position - 1);
        if (isEmptyCell(leftCell)) {
            moveNumber(e, leftCell);
            return;
        }

        // move down
        var nextRow = e.parent().next();
        if (nextRow !== null && isEmptyCell(nextRow.children().eq(position))) {
            moveNumber(e, nextRow.children().eq(position));
            return;
        }

        // move right
        var rightCell = currentRow.eq(position + 1);
        if (isEmptyCell(rightCell)) {
            moveNumber(e, rightCell);
            return;
        }
    }

    var isEmptyCell = function(e) {
        return e !== null && e.html() === "";
    };

    var moveNumber = function(source, destination) {
        var sourceValue = source.html();
        source.text("");
        destination.text(sourceValue);
    }

    window.onload = function() {

        $(".numberCell").click(function (e) {
            doMoveIfValid(e);
        });

        initializeRandomGrid();
    };

}(window.jrQuery));