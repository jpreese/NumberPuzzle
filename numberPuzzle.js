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

    var isValidMove = function (e) {
        var previousRow = e.parent().prev();
        var position = e.parent().children().index(e);
        var aboveCell;

        if (previousRow != null) {
            aboveCell = previousRow.children().eq(position);
            if (isEmptyCell(aboveCell)) {
                moveNumber(e, aboveCell);
            }
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
            isValidMove(e);
        });

        initializeRandomGrid();
    };

}(window.jrQuery));