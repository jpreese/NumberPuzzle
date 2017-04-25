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
        var previousRow = e.parent().prev().children();
        var aboveCell = previousRow.eq(position);
        if (previousRow != null && isEmptyCell(aboveCell)) {
            moveNumber(e, aboveCell);
            return;
        }

        // move left
        var leftCell = currentRow.eq(position - 1);
        if (leftCell !== null && isEmptyCell(leftCell)) {
            moveNumber(e, leftCell);
            return;
        }
    }

    var isEmptyCell = function(e) {
        return e.html() === "";
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