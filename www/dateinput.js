
var exec = require("cordova/exec");

var DateInput = function () {
    this.name = "DateInput";
};

var triggerShow = function (e) {
    e.preventDefault();
    e.stopPropagation();
    var options = {
        "element": this
        "value": this.value
    }
    DateInput.show();
};

DateInput.prototype.show = function (options) {
    exec(null, null, "DateInput", "show", [options]);
};

DateInput.prototype.init = function (selector) {
    if (!selector) {
        selector = "input[type='date']";
    }
    var inputs = document.querySelectorAll(selector);
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("click", triggerShow, false);
    }
};

module.exports = new DateInput();
