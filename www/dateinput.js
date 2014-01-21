
var exec = require("cordova/exec");

var DateInput = function () {
    this.name = "DateInput";
};

DateInput.prototype.show = function (options) {
    exec(null, null, "DateInput", "show", [options]);
};

module.exports = new DateInput();
