## Date Input Plugin for Apache Cordova

Cordova plugin to enhance text date inputs with native date selection.

## Platforms

There is currently native support for iOS already, the aim of this plugin is to provide enhancements for Android (4.3 and under) and Windows Phone 8.

## 1 step install

```
cordova plugin add https://github.com/leecrossley/cordova-plugin-date-input.git
```

## Usage

You **do not** need to reference any JavaScript, the Cordova plugin architecture will add a dateinput object to your root automatically when you build.

Ensure you use the plugin after your deviceready event has been fired.

### Bind callback to elements *WIP*

The easiest way to use this plugin is to bind the native callback to all date inputs (`input[type='date']` elements) once they have been rendered to the DOM. Calling the `init` function on the dateinput object will handle all this for you:

```js
window.dateinput.init();
```

There is also support for a custom selector as the first argument of the init function:

```js
window.dateinput.init("input.date");
```

**Note: Ensure init is called after trigger elements are rendered to the DOM** (there's no "on" style support).

### Showing programatically *WIP*

You may wish to trigger the native callback programatically. The `show` function on the dateinput object has been surfaced to allow this:

```js
var options = {

}; // WIP
window.dateinput.show(options);
```

## License

[MIT License](http://ilee.mit-license.org)
