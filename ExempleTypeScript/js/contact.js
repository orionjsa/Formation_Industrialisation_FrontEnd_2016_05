(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    /**
     * Contact
     */
    var Contact = (function () {
        /**
         * Création d'un contact
         * @param {string} prenom Le prénom du contact
         */
        function Contact(prenom) {
            this.prenom = prenom;
        }
        Contact.prototype.hello = function () {
            // backquote (altgr+7) pour eviter d'échapper les caractère apostrophe (et d'autre)
            return "Bonjour je m'appelle " + this.prenom;
        };
        return Contact;
    }());
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Contact;
});
//# sourceMappingURL=Contact.js.map