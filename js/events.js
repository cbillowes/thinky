(function() {
  var eventRegister = new EventRegister();

  eventRegister.add(window, "load", function() {
    if (typeof Navigation === "undefined") return;
    var navigation = new Navigation();
    navigation.initialize();
  });

  eventRegister.add(window, "load", function() {
    if (typeof Form === "undefined") return;
    var form = new Form();
    form.initialize();
  });

}());
