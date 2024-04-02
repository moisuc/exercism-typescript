"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleCipher = void 0;
var SimpleCipher = /** @class */ (function () {
    function SimpleCipher(key) {
        this.key = "";
        this.alphabet = "abcdefghijklmnopqrstuvwxyz";
        if (key === undefined) {
            this.key = this.generateKey();
        }
        else {
            this.key = key;
        }
    }
    SimpleCipher.prototype.generateKey = function (length) {
        var _this = this;
        if (length === void 0) { length = 100; }
        return Array.from({ length: length }, function () { return _this.alphabet[Math.floor(Math.random() * _this.alphabet.length)]; }).join("");
    };
    SimpleCipher.prototype.encode = function (input) {
        var encoded = "";
        if (this.key.length < input.length) {
            this.matchKeyLength(input.length);
        }
        for (var i = 0; i < input.length; i++) {
            var offset = this.alphabet.indexOf(this.key[i]);
            var letterPosition = this.alphabet.indexOf(input[i]);
            var sum = letterPosition + offset;
            if (sum >= 26) {
                sum = sum - 26;
            }
            encoded += this.alphabet.at(sum);
        }
        return encoded;
    };
    SimpleCipher.prototype.decode = function (encoded) {
        var decoded = "";
        if (this.key.length < encoded.length) {
            this.matchKeyLength(encoded.length);
        }
        for (var i = 0; i < encoded.length; i++) {
            var offset = this.alphabet.indexOf(this.key[i]);
            var letterPosition = this.alphabet.indexOf(encoded[i]);
            decoded += this.alphabet.at(letterPosition - offset);
        }
        return decoded;
    };
    SimpleCipher.prototype.matchKeyLength = function (length) {
        while (this.key.length < length) {
            this.key += this.key;
        }
    };
    return SimpleCipher;
}());
exports.SimpleCipher = SimpleCipher;
