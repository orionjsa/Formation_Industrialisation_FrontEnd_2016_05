(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", './contact'], factory);
    }
})(function (require, exports) {
    "use strict";
    var contact_1 = require('./contact');
    var romain = new contact_1.default('Romain');
    document.body.innerHTML = romain.hello().toUpperCase();
});
//# sourceMappingURL=main.js.map