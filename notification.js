(function() {

    var _ = window.Notification;

	_.winNotification = function() {
		var success = document.getElementById("success");
		removeHiddenFromElement(success);
	};

	_.invalidNotification = function() {
		var invalid = document.getElementById("invalid");
		removeHiddenFromElement(invalid);
		setTimeout(function() { fadeOutElement(invalid) }, 2000);
	};

	_.hideNotifications = function() {
		var success = document.getElementById("success");
		var invalid = document.getElementById("invalid");
		addHiddenToElement(success);
		addHiddenToElement(invalid);
	};

	var addHiddenToElement = function(element) {
		element.className += " hidden"
	};

	var removeHiddenFromElement = function(element) {
		element.className = element.className.replace(/(?:^|\s)hidden(?!\S)/g , '');
		element.style.display = "block";
		element.style.opacity = 1;
	};

	var fadeOutElement = function(element) {
		element.style.opacity = 1;

		(function fade() {
			if ((element.style.opacity -= .1) < 0) {
				element.style.display = "none";
			} else {
				requestAnimationFrame(fade);
			}
		})();
	};
})();