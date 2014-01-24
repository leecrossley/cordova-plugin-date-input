
var exec = require("cordova/exec");

var DateInput = function () {
    this.name = "DateInput";
};

DateInput.prototype.show = function (options) {
    exec(null, null, "DateInput", "show", [options]);
};

DateInput.prototype.init = function (selector) {
    if (hasNativeSupport()) {
        return;
    }
    if (!selector) {
        selector = "input[type='date']";
    }
    var inputs = document.querySelectorAll(selector);
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("click", triggerShow, false);
    }
};

var triggerShow = function (e) {
    e.preventDefault();
    e.stopPropagation();
    DateInput.show({
        "element": this,
        "value": this.value
    });
};

var hasNativeSupport = function () {
    var platform = device.platform.toLowerCase();
    if (platform === "ios") {
        return true;
    }
    var i = document.createElement("input");
    i.setAttribute("type", "date");
    return i.type !== "text";
};

module.exports = new DateInput();
