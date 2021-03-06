(function() {
  Navigation = function() {
    menu = document.querySelector(".menu-icon");
    trigger = document.querySelector(".menu-trigger");

    clicked = function() {
      return trigger.className.indexOf("triggered") > -1;
    },

    changeState = function() {
      if (clicked()) {
        hide();
      } else {
        show();
      }
    },

    show = function() {
      trigger.className = "menu-trigger triggered";
    },

    hide = function() {
      trigger.className = "menu-trigger trigger";
    }
  };

  Navigation.prototype.initialize = function() {
    var eventRegister = new EventRegister();
    eventRegister.add(menu, "click", changeState);
  };

}());
