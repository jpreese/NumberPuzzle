(function () {

    window.jrQuery = function(selector) {
        if (selector.indexOf("#") >= 0) {
            return new HtmlElement(document.getElementById(selector.substring(1)));
        } else {
            return new HtmlElementCollection(document.getElementsByClassName(selector.substring(1)));
        }
    };

    var HtmlElement = function (element) {

        this.html = function() {
            return element.innerHTML;
        };

        this.click = function(f) {
            element.onclick = function() {
                f();
            };
        };

        this.text = function(str) {
            element.innerHTML = str;
        };

        this.parent = function() {
            return new HtmlElement(element.parentNode);
        };

        this.prev = function () {
            return element.previousElementSibling == null ? null : new HtmlElement(element.previousElementSibling);
        };

        this.children = function() {
            return new HtmlElementCollection(element.children);
        };

        this.id = function() {
            return element.id;
        };
    };

    var HtmlElementCollection = function(elementArray) {

        this.click = function(f) {
            for (var x = 0; x < elementArray.length; x++) {
                elementArray[x].onclick = function() {
                    f(new HtmlElement(this));
                };
            }
        };

        this.length = function() {
            return elementArray.length;
        };

        this.eq = function(index) {
            return new HtmlElement(elementArray[index]);
        }

        this.index = function(e) {
            for (var x = 0; x < elementArray.length; x++) {
                if (e.html() == elementArray[x].innerHTML) {
                    return x;
                }
            }
        };
    };
})();