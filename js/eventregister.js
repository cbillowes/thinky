(function() {
  EventRegister = function() { };

  EventRegister.prototype.add = function(element, event, callback) {
    if (element.addEventListener) {
      element.addEventListener(event, callback);
    } else {
      element.attachEvent("on" + event, callback);
    }
  };
}());
