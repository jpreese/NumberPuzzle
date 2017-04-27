(function () {

    window.Timer = function () {
        this.ms = 0;
        this.sec = 0;
        this.timer = 0;
    };

    window.Timer.prototype = {

        start: function () {
            var self = this;
            var callDisplay = function () {
                self.display();
            }

            this.timer = setInterval(callDisplay, 100);
        },

        stop: function () {
            clearInterval(this.timer);
            this.timer = 0;
        },

        display: function () {
            if (this.ms >= 9) {
                this.ms = 0;
                this.sec += 1;
            }
            else {
                this.ms += 1;
                time.innerHTML = [this.sec, this.ms].join('.');
            }
        },

        reset: function () {
            this.stop();
            this.ms = 0;
            this.sec = 0;
        }
    };
})();