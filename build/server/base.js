/**
 * Created by vincentyan on 2016/10/7.
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var router = _express2["default"].Router();

var base = (function () {
    function base() {
        _classCallCheck(this, base);

        init();
    }

    _createClass(base, [{
        key: "init",
        value: function init() {
            console.log("base:init");
        }
    }]);

    return base;
})();

exports["default"] = base;
module.exports = exports["default"];