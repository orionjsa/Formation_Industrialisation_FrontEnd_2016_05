/**
 * Created by Administrateur on 25/05/2016.
 */

// module iife
(function (global) {
    function stringLength(str) {
        if (typeof str !== 'string') {
            throw new Error('str must be a string');
        }
        return str.length;
    }

    global.MyString = {};
    global.MyString.length = stringLength;

}(this));
// on nomme this (variable globale) à l'exterieur et global à l'intereiur