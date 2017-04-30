(function() {

    window.jrQuery = function(selector) {
    
        var collection;
        if (selector.indexOf("#") >= 0) {
            collection = document.getElementById(selector.substring(1));
        } else {
            collection = document.getElementsByClassName(selector.substring(1));
        }
        
        return new jrQuery.HtmlElement(collection);
    };

    jrQuery.HtmlElement = function(element) {
        this.element = element;
    }
    
    jrQuery.HtmlElement.prototype = {
    
        eq: function(index) {
            return new jrQuery.HtmlElement(this.element[index]);
        },
    
        html: function() {
            return this.element.innerHTML;
        },
        
        click: function(f) {
            if(this.element.length === undefined) {
                this.element.onclick = function() {
                    f();
                };
            }
            else {
                for(var x = 0; x < this.element.length; x++) {
                    this.element[x].onclick = function() {
                        f(new jrQuery.HtmlElement(this));
                    };
                }
            }
        },
        
        text: function(output) {
            this.element.innerHTML = output;
        },
        
        parent: function() {
            return new jrQuery.HtmlElement(this.element.parentNode);
        },
        
        prev: function() {
            return this.element.previousElementSibling === null ? null : new jrQuery.HtmlElement(this.element.previousElementSibling);
        },
        
        next: function() {
            return this.element.nextElementSibling === null ? null : new jrQuery.HtmlElement(this.element.nextElementSibling); 
        },
        
        children: function() {
            return new jrQuery.HtmlElement(this.element.children);
        },
        
        id: function() {
            return this.element.id;
        },
        
        index: function(e) {
            for (var x = 0; x < this.element.length; x++) {
                if (e.html() == this.element[x].innerHTML) {
                    return x;
                }
            }
        },
        
        length: function() {
            return this.element.length;
        }
    };
})();