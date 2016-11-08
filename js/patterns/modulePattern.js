// IIFE
// INMEDIATELY INVOKED FUNCTION EXPRESSIONS
(function () {
    // AMBITO
    var a = 11;
})();

// Basic module pattern
// File1.js
var module1 = (function(exports) {
  exports.a = 11;

  function doStuff() {}

  exports.doStuff = doStuff; //Export de doStuff

  return exports;
})(module1 || {});

// Basic module pattern
// File2.js
var module1 = (function(exports) {
  exports.a = 11;

  function doStuff() {}

  return exports;
})(module1 || {});

// Submodule
// File3.js
var module1 = (function(exports) {
  exports.submodule = exports.submodule || {};

  function doStuff() {}

  return exports;
})(module1 || {});
