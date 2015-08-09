(function() {
  Form = function() {
    fields = document.querySelectorAll(".form > .field");
    inputs = document.querySelectorAll(".form > .field input, .form > .field textarea");

    activate = function() {
      var field;
      var parent = this.parentElement;
      for (var i = 0; i < fields.length; i++) {
        field = fields[i];
        field.className = "field";
      }
      parent.className = "field active";
    }
  };

  Form.prototype.initialize = function() {
    var field;
    for (var i = 0; i < inputs.length; i++) {
      field = inputs[i];
      field.onfocus = activate;
    }
  };

}());
